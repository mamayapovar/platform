import json
import os
import random
import transliterate
from shutil import rmtree, copy2

import pymorphy2
from django.conf import settings
from django.contrib import auth
from django.contrib.auth import models, logout
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.core.files.base import ContentFile
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.contrib.auth import login, authenticate
from django.shortcuts import render
from django.core.cache import cache

from .forms import *
from .models import Like, Recipe, Bookmark, UserProfile, StepImages, Subscribe, Category, Comment, Approve

morph = pymorphy2.MorphAnalyzer()


def get_formatted_recipe(recipes):
    for recipe in recipes:
        # user
        recipe.author_id = models.User.objects.get(id=recipe.author_id)

        # ingredients
        recipe.ingredients = [[x.split(':')[0], ' '.join(x.split(':')[1].split('-'))] for x in
                              recipe.ingredients.split(';')]

        # persons
        pers = int(recipe.persons)
        recipe.persons = f"{pers} {morph.parse('порция')[0].make_agree_with_number(pers).word}"

        # cooking_time
        if len(recipe.cooking_time.split(':')) == 2 and recipe.cooking_time.split(':')[0] != '':
            if recipe.cooking_time.split(':')[1] == '0':
                cook = recipe.cooking_time.split(':')
                recipe.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word}"
            elif recipe.cooking_time.split(':')[0] != '0':
                cook = recipe.cooking_time.split(':')
                recipe.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word} " \
                                      f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
            else:
                cook = recipe.cooking_time.split(':')
                recipe.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
        else:
            cook = recipe.cooking_time.split(':')
            recipe.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"

        # photo
        if recipe.photo:
            pass
        else:
            recipe.photo = None
    return recipes


def index(request):
    recipes = Recipe.objects.filter(is_approved=True)

    new_recipes = get_formatted_recipe(recipes)
    content = {
        'recipes': new_recipes,
        'is_auth': request.user.is_authenticated,
        'user': request.user,
        'cats': Category.objects.all(),
        'form': LoginForm,
        'title': 'Мама, я повар! — платформа для кулинаров'
    }
    return render(request, 'recipes/index.html', content)


def postindex(request):
    form = RegistrationForm(request.POST)
    if form.is_valid():
        if request.POST['username'] and request.POST['email'] and request.POST['password']:
            if 2 <= len(form.cleaned_data['username']) <= 30:
                if len(form.cleaned_data['password']) >= 4:
                    if not User.objects.filter(email=form.cleaned_data['email']):
                        user = User.objects.create_user(form.cleaned_data['username'], form.cleaned_data['email'],
                                                        form.cleaned_data['password'])
                        user.save()
                        copy2(os.path.join(settings.STATIC_ROOT, 'recipes', 'img', 'placeholder-avatar.jpg'), os.path.join(settings.MEDIA_ROOT, 'avatars', str(user.id) + '.jpg'))
                        UserProfile(posts=0, user=user, avatar=os.path.join('avatars', str(user.id) + '.jpg')).save()

                        # login
                        user1 = authenticate(request, email=form.cleaned_data['email'], password=form.cleaned_data['password'])
                        login(request, user1)

                        return JsonResponse(data={'status': 201}, status=200)
                    else:
                        return JsonResponse(data={
                            'form_id': 'email',
                            'status': 400,
                            'error': 'Хмм, ты уже зарегистрирован, попробуй войти в аккаунт'
                        }, status=200)
                else:
                    return JsonResponse(data={
                            'form_id': 'password',
                            'status': 400,
                            'error': 'Придумай пароль от 4 символов'
                        }, status=200)
            else:
                return JsonResponse(data={
                        'form_id': 'username',
                        'status': 400,
                        'error': 'Проверь правильно ли написано имя'
                    }, status=200)
        elif request.POST['username'] and request.POST['email']:
                return JsonResponse(
                    data={
                        'form_id': 'password',
                        'status': 400,
                        'error': 'Придумай пароль от 4 символов'
                    },
                    status=200
                )
        elif request.POST['username'] and request.POST['password']:
                return JsonResponse(
                    data={
                        'form_id': 'email',
                        'status': 400,
                        'error': 'Укажи почту'
                    },
                    status=200
                )
        elif request.POST['email'] and request.POST['password']:
                return JsonResponse(
                    data={
                        'form_id': 'username',
                        'status': 400,
                        'error': 'Не спеши, сначала назовись'
                    },
                    status=200
                )
        elif request.POST['email']:
                return JsonResponse(
                    data={
                        'form_id': 'only_email',
                        'status': 400,
                        'error': 'Укажи имя и придумай пароль от 4 символов'
                    },
                    status=200
                )
        elif request.POST['username']:
                return JsonResponse(
                    data={
                        'form_id': 'only_username',
                        'status': 400,
                        'error': 'Укажи почту и придумай пароль от 4 символов'
                    },
                    status=200
                )
        elif request.POST['password']:
                return JsonResponse(
                    data={
                        'form_id': 'only_password',
                        'status': 400,
                        'error': 'Укажи имя и почту'
                    },
                    status=200
                )
        else:
            return JsonResponse(data={
                'form_id': 'username',
                'status': 400,
                'error': 'Не спеши, сначала назовись'
            }, status=200)


def postlogin(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        email = request.POST.get('email')
        password = request.POST.get('password')

        if form.is_valid():
            if email and password:
                user = authenticate(request, email=form.cleaned_data['email'], password=form.cleaned_data['password'])
                if user:
                    login(request, user)
                    return JsonResponse(data={'status': 201}, status=200)
                elif not User.objects.filter(email=form.cleaned_data['email']):
                    return JsonResponse(
                        data={
                            'form_id': 'email',
                            'status': 400,
                            'error': 'Хмм, мы ещё не знакомы, попробуй зарегистрироваться'
                        },
                        status=200
                    )
                return JsonResponse(
                    data={
                        'form_id': 'password',
                        'status': 400,
                        'error': 'Неправильный пароль, попробуй ещё раз'
                    },
                    status=200
                )
            elif password:
                return JsonResponse(
                    data={
                        'form_id': 'email',
                        'status': 400,
                        'error': 'Укажи почту'
                    },
                    status=200
                )
            elif email:
                return JsonResponse(
                    data={
                        'form_id': 'password',
                        'status': 400,
                        'error': 'Укажи пароль'
                    },
                    status=200
                )
            return JsonResponse(
                data={
                    'form_id': 'email',
                    'status': 400,
                    'error': 'Укажи почту'
                },
                status=200
            )


def postlogout(request):
    logout(request)
    return HttpResponseRedirect('/')


def new_recipe(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            return render(request, 'recipes/new-recipe.html', {'title': 'Создание рецепта — Мама, я повар!'})
        return HttpResponseRedirect('/')
    elif request.method == 'POST':
        form = RecipeForm(request.POST, request.FILES)
        if form.is_valid():
            # check title
            if request.POST['title']:
                if len(form.cleaned_data['title']) > 80:
                    return JsonResponse(data={
                        'form_id': 'title',
                        'status': 400,
                        'error': 'Укажи более короткое название блюда, до 80 символов'
                    }, status=200)
            else:
                return JsonResponse(data={
                    'form_id': 'title',
                    'status': 400,
                    'error': 'Укажи название блюда'
                }, status=200)

            # check description
            if request.POST['description']:
                if len(form.cleaned_data['description']) > 180:
                    return JsonResponse(data={
                        'form_id': 'desc',
                        'status': 400,
                        'error': 'Опиши рецепт покороче, до 180 символов'
                    }, status=200)

            # check category
            if not request.POST['cat']:
                return JsonResponse(data={
                    'form_id': 'cat',
                    'status': 400,
                    'error': 'Укажи категорию блюда'
                }, status=200)

            # check time cooking
            if request.POST.get("cooking_time_minutes") != '0':
                if (request.POST.get("cooking_time_hours") == '' or int(request.POST.get("cooking_time_hours")) == 0) and int(request.POST.get("cooking_time_minutes")) <= 0:
                    return JsonResponse(data={
                        'form_id': 'cooking-time',
                        'error': 'Укажи время приготовления блюда',
                        'status': 400,
                    }, status=200)
            else:
                if request.POST.get("cooking_time_hours") == '0' or request.POST.get("cooking_time_hours") == '':
                    return JsonResponse(data={
                        'form_id': 'cooking-time',
                        'error': 'Укажи время приготовления блюда',
                        'status': 400,
                    }, status=200)

            # check ingredients
            for elem in request.POST:
                if 'ingredient-name-' in elem:
                    if request.POST[elem]:
                        if len(request.POST[elem]) > 80:
                            return JsonResponse(data={
                                'form_id': 'ingredient',
                                'ingredient_id': elem.split('-')[-1],
                                'ingredient_field': 'name',
                                'status': 400,
                                'error': 'Укажи более короткое название ингредиента, до 80 символов'
                            }, status=200)
                    else:
                        return JsonResponse(data={
                            'form_id': 'ingredient',
                            'ingredient_id': elem.split('-')[-1],
                            'ingredient_field': 'name',
                            'status': 400,
                            'error': 'Укажи название ингредиента'
                        }, status=200)
                if 'ingredient-measure-' in elem:
                    if not request.POST[elem]:
                        return JsonResponse(data={
                            'form_id': 'ingredient',
                            'ingredient_id': elem.split('-')[-1],
                            'ingredient_field': 'measure',
                            'status': 400,
                            'error': 'Укажи в чем измеряется ингредиент'
                        }, status=200)


            # check photo
            if not request.FILES.get('photo'):
                return JsonResponse(data={
                        'form_id': 'photo',
                        'status': 400,
                        'error': 'Загрузи фото блюда'
                    }, status=200)


            # check steps
            for elem in request.POST:
                if 'step-description-' in elem:
                    if request.POST[elem]:
                        if len(request.POST[elem]) > 1200:
                            return JsonResponse(data={
                                'form_id': 'step',
                                'step_id': elem.split('-')[-1],
                                'step_field': 'desc',
                                'status': 400,
                                'error': 'Опиши шаг покороче, до 1200 символов'
                            }, status=200)
                    else:
                        return JsonResponse(data={
                            'form_id': 'step',
                            'step_id': elem.split('-')[-1],
                            'step_field': 'desc',
                            'status': 400,
                            'error': 'Опиши, что нужно сделать на этом шаге'
                        }, status=200)


            folder_id = ''.join([str(random.randint(0, 9)) for x in range(7)])
            categories = {
                "Выпечка": 1,
                "Супы": 2,
                "Салаты": 3,
                "Горячие блюда": 4
            }
            title = request.POST.get('title').capitalize()
            description = request.POST.get('description').capitalize()
            cat_id = categories[request.POST.get('cat')]
            persons = request.POST.get('persons')
            cooking_time = f'{request.POST.get("cooking_time_hours")}:{request.POST.get("cooking_time_minutes")}'
            ings = []
            ingredient = ''
            for elem in request.POST:
                if 'ingredient-name-' in elem:
                    ingredient += request.POST.get(
                        f'ingredient-name-{elem.split("-")[-1]}').strip().capitalize() + ':'
                if 'ingredient-amount-' in elem:
                    ingredient += request.POST.get(
                        f'ingredient-amount-{elem.split("-")[-1]}') + '-'
                if 'ingredient-measure-' in elem:
                    ingredient += request.POST.get(
                        f'ingredient-measure-{elem.split("-")[-1]}')
                    ings.append(ingredient)
                    ingredient = ''
            ingredients = ';'.join(ings)

            # photo
            folder = 'recipes'
            second_folder = folder_id

            try:
                uploaded_filename = '_'.join(transliterate.translit(request.FILES.get('photo').name.replace('ь', ''), reversed=True).split())
            except transliterate.exceptions.LanguageDetectionError:
                uploaded_filename = '_'.join(request.FILES.get('photo').name.split())

            try:
                os.mkdir(os.path.join(settings.MEDIA_ROOT, folder))
            except:
                pass

            os.mkdir(os.path.join(settings.MEDIA_ROOT, folder, second_folder))

            full_filename = os.path.join(
                settings.MEDIA_ROOT, folder, second_folder, uploaded_filename)
            fout = open(full_filename, 'wb+')

            file_content = ContentFile(request.FILES.get('photo').read())

            for chunk in file_content.chunks():
                fout.write(chunk)
            fout.close()

            # photos of steps and text

            itog1 = []
            for elem in request.POST:
                if 'step-description-' in elem:
                    itog1.append([x.capitalize() for x in request.POST[elem].replace('\r', '').split('\n') if x != ''])

            j = 0
            step_descs = []
            for elem in itog1:
                j += 1
                step_descs.append('{}:{}'.format(j, "\n".join(elem)))

            sss = ';'.join(step_descs)
            filename_for_save = os.path.join(folder, second_folder, uploaded_filename)

            recipe = Recipe(
                title=title,
                description=description,
                cooking_time=cooking_time,
                persons=persons,
                cat_id=cat_id,
                author_id=request.user.id,
                ingredients=ingredients,
                photo=filename_for_save,
                steps=sss,
                folder_id=folder_id,
            )
            recipe.save()

            approve = Approve(post=recipe, status=False)
            approve.save()

            like = Like(like_post=recipe, like_user=request.user)
            like.save()

            descs = []
            for elem in request.POST:
                if 'step-description-' in elem:
                    descs.append(elem)

            files = []
            for elem in request.FILES:
                if 'step-photo-' in elem:
                    files.append(elem)

            itog = []
            for elem in files:
                for el in descs:
                    if elem.split('-')[-1] == el.split('-')[-1]:
                        itog.append([descs.index(el), elem])

            for elem in itog:

                folder = 'recipes'
                second_folder = folder_id
                if elem:
                    uploaded_filename = str(elem[0] + 1) + '.' + request.FILES[elem[1]].name.split('.')[-1]
                else:
                    continue

                try:
                    os.mkdir(os.path.join(os.path.join(settings.MEDIA_ROOT, folder, second_folder), 'steps'))
                except:
                    pass

                ful_fil = os.path.join(
                    settings.MEDIA_ROOT, folder, second_folder, 'steps', uploaded_filename)

                try:
                    fout2 = open(ful_fil, 'wb+')

                    file_content2 = ContentFile(request.FILES[elem[1]].read())

                    for chunk in file_content2.chunks():
                        fout2.write(chunk)
                    fout2.close()

                    imgs = StepImages(image=os.path.join(folder, second_folder, 'steps', uploaded_filename), recipe=recipe)
                    imgs.save()
                except Exception:
                    pass
            return JsonResponse(data={'status': 201}, status=200)
        return HttpResponseRedirect('/')


def recipe(request, recipe_id):
    cache.clear()
    recipe = Recipe.objects.get(id=recipe_id)
    recipe.author_id = models.User.objects.get(id=recipe.author_id)
    if len(recipe.cooking_time.split(':')) == 2 and recipe.cooking_time.split(':')[0] != '':
        if recipe.cooking_time.split(':')[1] == '0':
            cook = recipe.cooking_time.split(':')
            recipe.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word}"
        elif recipe.cooking_time.split(':')[0] == '24':
            recipe.cooking_time = f'1 день'
        elif recipe.cooking_time.split(':')[0] != '0':
            cook = recipe.cooking_time.split(':')
            recipe.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word} " \
                                  f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
        else:
            cook = recipe.cooking_time.split(':')
            recipe.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
    else:
        cook = recipe.cooking_time.split(':')
        recipe.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"

    pers = int(recipe.persons)
    recipe.persons = f"{pers} {morph.parse('порция')[0].make_agree_with_number(pers).word}"

    recipe.ingredients = [[x.split(':')[0], ' '.join(x.split(':')[1].split('-'))] for x in
                          recipe.ingredients.split(';')]

    recipe.steps = [[x.split(':')[0], x.split(':')[1].split('\n')] for x in recipe.steps.split(';')]

    step_photos = [x for x in StepImages.objects.filter(recipe_id=recipe_id)]
    step_photos.sort(key=lambda x: int(str(x.image.url).split('/')[-1].split('.')[0]))
    is_exist = False
    if step_photos:
        for el in recipe.steps:
            if len(el) == 2:
                for elem in step_photos:
                    if str(elem.image.url).split('/')[-1].split('.')[0] == el[0]:
                        el.append(elem.image)
                        is_exist = True
                        break
                if not is_exist:
                    el.append(None)
                is_exist = False
    else:
        for elem in recipe.steps:
            elem.append(None)

    data = []
    for elem in Comment.objects.filter(com_post_id=recipe.id):
        one = []
        one.append(elem.comment)
        one.append(elem.com_user.username)
        one.append(elem.com_user.id)
        if UserProfile.objects.filter(user=elem.com_user.id):
            one.append(str(UserProfile.objects.filter(user_id=elem.com_user.id)[0].avatar))
        else:
            one.append(None)
        one.append(elem)

        data.append(one)
        one = []


    return render(request, 'recipes/post.html', {
        'recipe': recipe,
        'is_auth': request.user.is_authenticated,
        'cats': Category.objects.all(),
        'title': f'{recipe.title} — Мама, я повар!',
        'comments': data,
        'count_of_comments': f"{len(Comment.objects.filter(com_post_id=recipe.id))} {morph.parse('комментарий')[0].make_agree_with_number(len(Comment.objects.filter(com_post_id=recipe.id))).word}",
    })


def bookmark_post(request, pk):
    user = auth.get_user(request)
    bm = Bookmark.objects.filter(book_post_id=pk, book_user_id=user.id)
    if bm:
        bm.delete()
    else:
        bookmark = Bookmark(book_post_id=pk, book_user_id=user.id)
        bookmark.save()

    return HttpResponse(
        json.dumps({
            "result": True if bm else False
        }),
        content_type="application/json"
    )


def bookmarks(request):
    if request.user.is_authenticated:
        bookmarks = Bookmark.objects.filter(book_user_id=request.user.id)
        recipes = []
        for elem in bookmarks:
            recipes.append(Recipe.objects.get(id=elem.book_post_id))

        new_recipes = get_formatted_recipe(recipes)
        content = {
            'bookmarks': new_recipes,
            'is_auth': request.user.is_authenticated,
            'user': request.user,
            'title': 'Закладки — Мама, я повар!'
        }
        return render(request, 'recipes/bookmarks.html', content)
    return HttpResponseRedirect('/')


def user_profile(request, id):
    try:
        profile_data = UserProfile.objects.get(user_id=id)
    except:
        profile_data = None
    objs = Recipe.objects.filter(author_id=id, is_approved=True)
    new_recipes = get_formatted_recipe(objs)


    user = models.User.objects.get(id=id)

    content = {
        'recipes': new_recipes,
        'user': user,
        'is_auth': request.user.is_authenticated,
        'posts': len(new_recipes),
        'title': f'{user.username} — Мама, я повар!',
        'cats': Category.objects.all(),
        'profile_data': profile_data
    }
    return render(request, 'recipes/user.html', content)


def change_profile_picture(request):
    if UserProfile.objects.filter(user=request.user):
        user = UserProfile.objects.get(user=request.user)
        if user.avatar:
            os.remove(user.avatar.path)
        new_path = os.path.join(settings.MEDIA_ROOT, 'avatars', str(request.user.id) + '.jpg')
        with open(new_path, 'wb+') as destination:
            for chunk in request.FILES['file'].chunks():
                destination.write(chunk)
        user.avatar = os.path.join('avatars', str(request.user.id) + '.jpg')
        user.save()
        cache.clear()
    else:
        recipes = Recipe.objects.filter(author_id=request.user.id)
        new_path = os.path.join(settings.MEDIA_ROOT, 'avatars', str(request.user.id) + '.jpg')
        with open(new_path, 'wb+') as destination:
            for chunk in request.FILES['file'].chunks():
                destination.write(chunk)
        avatar = os.path.join('avatars', str(request.user.id) + '.jpg')
        new_photo = UserProfile(user=request.user, avatar=avatar, posts=len(recipes))
        new_photo.save()
        cache.clear()
    return HttpResponseRedirect(f'/user/{str(request.user.id)}/')


def like_post(request, pk):
    recipe = Recipe.objects.get(id=pk)
    obj = Like.objects.filter(like_post=recipe, like_user=request.user)
    if obj:
        new_obj = Like.objects.get(like_post_id=pk, like_user=request.user)
        if new_obj.status is False and request.user == new_obj.like_user:
            f = Like.objects.get(like_post_id=pk, like_user=request.user)
            f.likes = f.likes + 1
            f.status = True
            f.save()
        elif new_obj.status is True and request.user == new_obj.like_user:
            f = Like.objects.get(like_post_id=pk, like_user=request.user)
            f.likes = f.likes - 1
            f.status = False
            f.save()
    else:
        like = Like(like_post=recipe, like_user=request.user, likes=1, status=True)
        like.save()
    return HttpResponse(
        json.dumps({
            "result": True if recipe else False,
            'count': sum([x.likes for x in Like.objects.filter(like_post_id=pk)])
        }),
        content_type="application/json"
    )


def subscribe_post(request, pk):
    if Subscribe.objects.filter(subscribe_to_id=pk, subscribe_from_id=request.user.id):
        Subscribe.objects.get(subscribe_to_id=pk, subscribe_from_id=request.user.id).delete()
    else:
        sub = Subscribe(subscribe_to_id=pk, subscribe_from_id=request.user.id)
        sub.save()
    return HttpResponse(
        json.dumps({
            "result": True if recipe else False
        }),
        content_type="application/json"
    )


def category(request, id):
    recipes = Recipe.objects.filter(cat_id=id, is_approved=True)
    return render(request, "recipes/category.html", {
        'recipes': get_formatted_recipe(recipes),
        "cat": Category.objects.get(id=id),
        'cats': Category.objects.all(),
        "is_auth": request.user.is_authenticated
    })

def delete_recipe(request, id):
    recipe = Recipe.objects.get(id=id)
    if request.user.id == recipe.author_id:

        # likes
        likes = Like.objects.filter(like_post_id=recipe.id)
        for elem in likes:
            elem.delete()

        # images of steps
        imgs = StepImages.objects.filter(recipe_id=recipe.id)
        for elem in imgs:
            elem.delete()

        # bookmarks
        bms = Bookmark.objects.filter(book_post_id=recipe.id)
        for elem in bms:
            elem.delete()

        cmts = Comment.objects.filter(com_post_id=recipe.id)
        for elem in cmts:
            elem.delete()

        rmtree(os.path.join(settings.MEDIA_ROOT, 'recipes', recipe.folder_id))

        recipe.delete()

        return HttpResponseRedirect('/')


def settings_profile(request):
    if request.method == 'POST':
        form = ProfileSettingsForm(request.POST)
        username = request.POST.get('username')
        if form.is_valid():
            if username:
                if UserProfile.objects.filter(user_id=request.user.id):
                    profile = UserProfile.objects.get(user_id=request.user.id)
                    profile.description = form.cleaned_data['description']
                    profile.save()
                    if form.cleaned_data['username'] != request.user.username:
                        user = User.objects.get(id=request.user.id)
                        user.username = form.cleaned_data['username']
                        user.save()
                else:
                    profile = UserProfile(user_id=request.user.id, description=form.cleaned_data['description'], avatar=None, posts=len(Recipe.objects.filter(author_id=request.user.id)))
                    profile.save()
                    if form.cleaned_data['username'] != request.user.username:
                        user = User.objects.get(id=request.user.id)
                        user.username = form.cleaned_data['username']
                        user.save()
                return JsonResponse(data={'status': 201}, status=200)
            else:
                return JsonResponse(data={
                        'form_id': 'username',
                        'status': 400,
                        'error': 'Укажи имя'
                    }, status=200)
    return render(request, 'recipes/settings/profile.html', {
        'title': 'Настройки профиля - Мама, я повар!',
        'username': User.objects.get(id=request.user.id).username
    })


def settings_account(request):
    if request.method == 'POST':
        if 'email' in request.POST:  # Электронная почта
            form = ChangeEmailForm(request.POST)
            if form.is_valid():
                if form.cleaned_data['email'] in [x.email for x in User.objects.all()]:
                    return JsonResponse(data={
                        'form_id': 'email',
                        'status': 400,
                        'error': 'Эта почта уже используется, попробуй другую'
                    }, status=200)
                elif request.POST.get("email") and request.POST.get('email') != request.user.email:
                    user = User.objects.get(id=request.user.id)
                    user.email = form.cleaned_data['email']
                    user.save()
                    return JsonResponse(data={'status': 201}, status=200)
                elif not form.cleaned_data['email']:
                    return JsonResponse(data={
                        'form_id': 'email',
                        'status': 400,
                        'error': 'Укажи почту'
                    }, status=200)
        elif 'password_old' in request.POST:  # Установка нового пароля
            form = ChangePasswordForm(request.POST)
            if form.is_valid():
                if form.cleaned_data['password_old'] and form.cleaned_data['password_new'] and form.cleaned_data['password_new_repeat']:
                    if check_password(form.cleaned_data['password_old'], User.objects.get(id=request.user.id).password):
                        if form.cleaned_data['password_new'] == form.cleaned_data['password_new_repeat']:
                            user = User.objects.get(id=request.user.id)
                            user.set_password(form.cleaned_data['password_new'])
                            user.save()
                            return JsonResponse(data={'status': 201}, status=200)
                        elif form.cleaned_data['password_new'] != form.cleaned_data['password_new_repeat']:
                            return JsonResponse(data={
                                'form_id': 'password-new-repeat',
                                'status': 400,
                                'error': 'Пароли не совпадают, попробуй ещё раз'
                            }, status=200)
                    else:
                        return JsonResponse(data={
                            'form_id': 'password-old',
                            'status': 400,
                            'error': 'Неправильный пароль, попробуй ещё раз'
                        }, status=200)
                else:
                    return JsonResponse(data={
                        'form_id': 'password-empty',
                        'status': 400,
                        'error': 'Укажи текущий пароль'
                    }, status=200)

    return render(request, 'recipes/settings/account.html', {
        'title': "Настройки аккаунта - Мама, я повар!"
    })


def edit_recipe(request, id):
    if request.method == 'GET':
        recipe = get_formatted_recipe(Recipe.objects.filter(id=id))[0]

        recipe.ingredients = [[x.split(':')[0], x.split(':')[1].split('-')[0], x.split(':')[1].split('-')[1], ''.join([str(random.randint(0, 10)) for i in range(10)])] for x in
                            Recipe.objects.get(id=id).ingredients.split(';')]

        recipe.steps = [[x.split(':')[0], x.split(':')[1], ''.join([str(random.randint(0, 10)) for i in range(10)])] for x in recipe.steps.split(';')]

        recipe.cooking_time = [Recipe.objects.get(id=id).cooking_time.split(':')]

        recipe.persons = recipe.persons.split()[0]

        step_photos = [x for x in StepImages.objects.filter(recipe_id=id)]
        step_photos.sort(key=lambda x: int(str(x.image.url).split('/')[-1].split('.')[0]))
        is_exist = False
        if step_photos:
            for el in recipe.steps:
                if len(el) == 3:
                    for elem in step_photos:
                        if str(elem.image.url).split('/')[-1].split('.')[0] == el[0]:
                            el.append(elem.image)
                            is_exist = True
                            break
                    if not is_exist:
                        el.append(None)
                    is_exist = False
        else:
            for elem in recipe.steps:
                elem.append(None)

        return render(request, 'recipes/edit_recipe.html', {'recipe': recipe, 'title': 'Редактирование - Мама, я повар!'})
    elif request.method == 'POST':
        form = RecipeForm(request.POST, request.FILES)
        if form.is_valid():
            # check title
            if request.POST['title']:
                if len(form.cleaned_data['title']) > 80:
                    return JsonResponse(data={
                        'form_id': 'title',
                        'status': 400,
                        'error': 'Укажи более короткое название блюда, до 80 символов'
                    }, status=200)
            else:
                return JsonResponse(data={
                    'form_id': 'title',
                    'status': 400,
                    'error': 'Укажи название блюда'
                }, status=200)

            # check description
            if request.POST['description']:
                if len(form.cleaned_data['description']) > 180:
                    return JsonResponse(data={
                        'form_id': 'desc',
                        'status': 400,
                        'error': 'Опиши рецепт покороче, до 180 символов'
                    }, status=200)

            # check category
            if not request.POST['cat']:
                return JsonResponse(data={
                    'form_id': 'cat',
                    'status': 400,
                    'error': 'Укажи категорию блюда'
                }, status=200)

            # check time cooking
            if request.POST.get("cooking_time_minutes") != '0':
                if (request.POST.get("cooking_time_hours") == '' or int(request.POST.get("cooking_time_hours")) == 0) and int(request.POST.get("cooking_time_minutes")) <= 0:
                    return JsonResponse(data={
                        'form_id': 'cooking-time',
                        'error': 'Укажи время приготовления блюда',
                        'status': 400,
                    }, status=200)
            else:
                if request.POST.get("cooking_time_hours") == '0' or request.POST.get("cooking_time_hours") == '':
                    return JsonResponse(data={
                        'form_id': 'cooking-time',
                        'error': 'Укажи время приготовления блюда',
                        'status': 400,
                    }, status=200)

            # check ingredients
            for elem in request.POST:
                if 'ingredient-name-' in elem:
                    if request.POST[elem]:
                        if len(request.POST[elem]) > 80:
                            return JsonResponse(data={
                                'form_id': 'ingredient',
                                'ingredient_id': elem.split('-')[-1],
                                'ingredient_field': 'name',
                                'status': 400,
                                'error': 'Укажи более короткое название ингредиента, до 80 символов'
                            }, status=200)
                    else:
                        return JsonResponse(data={
                            'form_id': 'ingredient',
                            'ingredient_id': elem.split('-')[-1],
                            'ingredient_field': 'name',
                            'status': 400,
                            'error': 'Укажи название ингредиента'
                        }, status=200)
                if 'ingredient-measure-' in elem:
                    if not request.POST[elem]:
                        return JsonResponse(data={
                            'form_id': 'ingredient',
                            'ingredient_id': elem.split('-')[-1],
                            'ingredient_field': 'measure',
                            'status': 400,
                            'error': 'Укажи в чем измеряется ингредиент'
                        }, status=200)


            # check photo
            if not request.FILES.get('photo'):
                return JsonResponse(data={
                        'form_id': 'photo',
                        'status': 400,
                        'error': 'Загрузи фото блюда'
                    }, status=200)


            # check steps
            for elem in request.POST:
                if 'step-description-' in elem:
                    if request.POST[elem]:
                        if len(request.POST[elem]) > 1200:
                            return JsonResponse(data={
                                'form_id': 'step',
                                'step_id': elem.split('-')[-1],
                                'step_field': 'desc',
                                'status': 400,
                                'error': 'Опиши шаг покороче, до 1200 символов'
                            }, status=200)
                    else:
                        return JsonResponse(data={
                            'form_id': 'step',
                            'step_id': elem.split('-')[-1],
                            'step_field': 'desc',
                            'status': 400,
                            'error': 'Опиши, что нужно сделать на этом шаге'
                        }, status=200)


            recipe = Recipe.objects.get(id=id)
            os.remove(recipe.photo.path)
            categories = {
                "Выпечка": 1,
                "Супы": 2,
                "Салаты": 3,
                "Горячие блюда": 4
            }
            recipe.title = form.cleaned_data['title'].capitalize()
            recipe.description = form.cleaned_data['description'].capitalize()
            recipe.cat_id = categories[form.cleaned_data['cat']]
            recipe.persons = form.cleaned_data['persons']
            try:
                recipe.cooking_time = f'{form.cleaned_data["cooking_time_hours"]}:{form.cleaned_data["cooking_time_minutes"]}'
            except Exception:
                recipe.cooking_time = f'0:{form.cleaned_data["cooking_time_minutes"]}'

            ings = []
            ingredient = ''
            for elem in request.POST:
                if 'ingredient-name-' in elem:
                    ingredient += request.POST.get(
                        f'ingredient-name-{elem.split("-")[-1]}').capitalize() + ':'
                if 'ingredient-amount-' in elem:
                    ingredient += request.POST.get(
                        f'ingredient-amount-{elem.split("-")[-1]}') + '-'
                if 'ingredient-measure-' in elem:
                    ingredient += request.POST.get(
                        f'ingredient-measure-{elem.split("-")[-1]}')
                    ings.append(ingredient)
                    ingredient = ''
            recipe.ingredients = ';'.join(ings)


            itog1 = []
            for elem in request.POST:
                if 'step-description-' in elem:
                    itog1.append([x for x in request.POST[elem].replace('\r', '').split('\n') if x != ''])


            j = 0
            step_descs = []
            for elem in itog1:
                j += 1
                step_descs.append('{}:{}'.format(j, "\n".join(elem)))

            recipe.steps = ';'.join(step_descs)
            try:
                folder_with_steps = os.path.join(settings.MEDIA_ROOT, 'recipes', recipe.folder_id, 'steps')
                rmtree(folder_with_steps)
                os.mkdir(folder_with_steps)

                for elem in StepImages.objects.filter(recipe_id=recipe.id):
                    elem.delete()
            except Exception:
                pass

            # photo
            folder = 'recipes'
            second_folder = recipe.folder_id

            try:
                uploaded_filename = '_'.join(transliterate.translit(request.FILES['photo'].name, reversed=True).split())
            except transliterate.exceptions.LanguageDetectionError:
                uploaded_filename = '_'.join(request.FILES['photo'].name.split())

            full_filename = os.path.join(
                settings.MEDIA_ROOT, folder, second_folder, uploaded_filename)

            fout = open(full_filename, 'wb+')

            file_content = ContentFile(request.FILES['photo'].read())

            for chunk in file_content.chunks():
                fout.write(chunk)
            fout.close()

            recipe.photo = os.path.join(folder, second_folder, uploaded_filename)

            recipe.save()

            descs = []
            for elem in request.POST:
                if 'step-description-' in elem:
                    try:
                        if [x for x in request.FILES].index(f'step-photo-{elem.split("-")[-1]}'):
                            descs.append([elem, True])
                    except ValueError:
                        descs.append([elem, False])



            files = []
            for elem in request.FILES:
                if 'step-photo-' in elem:
                    files.append(elem)


            itog = []
            for elem in files:
                for el in descs:
                    if el[1] is True:
                        if elem.split('-')[-1] == el[0].split('-')[-1]:
                            itog.append([descs.index(el), elem])
                    else:
                        itog.append([descs.index(el), None])


            for elem in itog:
                folder = 'recipes'
                second_folder = recipe.folder_id
                if elem[1]:
                    uploaded_filename = str(elem[0] + 1) + '.' + request.FILES[elem[1]].name.split('.')[-1]
                else:
                    continue

                try:
                    os.mkdir(os.path.join(os.path.join(settings.MEDIA_ROOT, folder, second_folder), 'steps'))
                except:
                    pass

                ful_fil = os.path.join(
                    settings.MEDIA_ROOT, folder, second_folder, 'steps', uploaded_filename)


                try:
                    fout2 = open(ful_fil, 'wb+')

                    file_content2 = ContentFile(request.FILES[elem[1]].read())

                    for chunk in file_content2.chunks():
                        fout2.write(chunk)
                    fout2.close()

                    imgs = StepImages(image=os.path.join(folder, second_folder, 'steps', uploaded_filename), recipe=recipe)
                    imgs.save()
                except Exception:
                    pass
            return JsonResponse(data={'status': 201}, status=200)
        return HttpResponseRedirect('/')


def momental_search(request):
    data = {}
    query = request.POST.get('query')
    if query:
        # *Поиск для сервера
        # data['categories'] = list(Category.objects.filter(name__icontains=query).values())
        # data['users'] = list(User.objects.filter(username__icontains=query).values())
        # data['recipes'] = list(Recipe.objects.filter(title__icontains=query).values())

        # *Поиск для локалки
        data['categories'] = list(Category.objects.filter(name__iregex=query).values())
        data['users'] = list(User.objects.filter(username__iregex=query).values())
        data['recipes'] = list(Recipe.objects.filter(title__iregex=query, is_approved=True).values())
        return JsonResponse(data=data, status=200)
    return JsonResponse(data=data, status=200)


def search(request):
    query = request.POST.get('query')
    # *Поиск для сервера
    # recipes = get_formatted_recipe(Recipe.objects.filter(title__icontains=query))

    # *Поиск для локалки
    recipes = get_formatted_recipe(Recipe.objects.filter(title__iregex=query, is_approved=True))
    return render(request, 'recipes/search.html', {
            'title': f'{query} - Мама, я повар!',
            'recipes': recipes,
            'rez': morph.parse('результат')[0].make_agree_with_number(len(recipes)).word,
            'len': len(recipes),
            'query': query,
            'is_auth': request.user.is_authenticated,
            'user': request.user,
            'cats': Category.objects.all(),
        })


def new_comment(request):
    text = request.POST.get('comments-text')
    post_id = request.POST.get('recipe_id')

    form = CommentsForm(request.POST)
    if form.is_valid():
        if len(text) < 1:
            return JsonResponse(data={
                'status': 400,
                'error': 'Напиши, чем тебе понравился рецепт'
            }, status=200)
        else:
            comment = Comment(comment=text, com_post_id=post_id, com_user=request.user)
            comment.save()

            return JsonResponse(data={
                'status': 201,
                'user': request.user.username,
                'text': text,
                'url_to_user': '',
                'user_id': request.user.id,
                'pfp': str(UserProfile.objects.filter(user=request.user)[0].avatar) if UserProfile.objects.filter(user=request.user) else None,
                'comment_id': comment.id
            }, status=200)


def delete_comment(request, id):
    if request.user.id == Comment.objects.get(id=id).com_user.id:
        Comment.objects.filter(id=id).delete()
        return JsonResponse(data={'status': 200}, status=200)
    return JsonResponse(data={'status': 400}, status=200)


def approve_button(request, id):
    Approve.objects.filter(post_id=id).delete()
    recipe = Recipe.objects.get(id=id)
    recipe.is_approved = True
    recipe.save()
    return HttpResponseRedirect('/admin/recipes/approve/')

def deny_button(request, id):
    Approve.objects.filter(post_id=id).delete()
    recipe = Recipe.objects.get(id=id)
    recipe.is_approved = False
    recipe.save()
    return HttpResponseRedirect('/admin/recipes/approve/')

def admin_recipe_deleting(request, id):
    recipe = Recipe.objects.get(id=id)
    if request.user.id == 33:
        # likes
        likes = Like.objects.filter(like_post_id=recipe.id)
        for elem in likes:
            elem.delete()

        # images of steps
        imgs = StepImages.objects.filter(recipe_id=recipe.id)
        for elem in imgs:
            elem.delete()

        # bookmarks
        bms = Bookmark.objects.filter(book_post_id=recipe.id)
        for elem in bms:
            elem.delete()

        cmts = Comment.objects.filter(com_post_id=recipe.id)
        for elem in cmts:
            elem.delete()

        rmtree(os.path.join(settings.MEDIA_ROOT, 'recipes', recipe.folder_id))

        recipe.delete()

        return HttpResponseRedirect('/admin/recipes/recipe/')


def delete_account(request):
    # subs from
    for elem in Subscribe.objects.filter(subscribe_from_id=request.user.id):
        elem.delete()

    # subs to
    for elem in Subscribe.objects.filter(subscribe_to_id=request.user.id):
        elem.delete()

    # user profile
    for elem in UserProfile.objects.filter(user_id=request.user.id):
        if elem.avatar:
            os.remove(elem.avatar.path)
        elem.delete()

    # comments
    for elem in Comment.objects.filter(com_user_id=request.user.id):
        elem.delete()

    # recipes
    recipes = Recipe.objects.filter(author_id=request.user.id)
    for elem in recipes:
        # step images
        for el in StepImages.objects.filter(recipe_id=elem.id):
            el.delete()

        # bookmarks
        for elem1 in Bookmark.objects.filter(book_user_id=request.user.id):
            elem1.delete()

        # likes
        for e in Like.objects.filter(like_user_id=request.user.id):
            e.delete()
        elem.delete()

    user = User.objects.get(id=request.user.id)
    user.delete()
    return HttpResponseRedirect('/')


def error_404(request, exception):
    return HttpResponseRedirect('/')
