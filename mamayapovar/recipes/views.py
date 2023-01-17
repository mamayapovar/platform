import json
import os
import random
from django.urls import reverse
import transliterate
from shutil import rmtree

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
from django.http.response import Http404
from django.utils import datastructures
from django.core.cache import cache

from .forms import *
from .models import Like, Recipe, Bookmark, UserProfile, StepImages, Subscribe, Category

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
    recipes = Recipe.objects.all()

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
    try:
        if not models.User.objects.get(email=request.POST.get('email', '')):
            models.User.objects.create_user(request.POST.get('username', ''), request.POST.get('email', ''),
                                            request.POST.get('password', '')).save()
        else:
            return HttpResponseRedirect('/')
    except Exception:
        models.User.objects.create_user(request.POST.get('username', ''), request.POST.get('email', ''),
                                        request.POST.get('password', '')).save()
    return HttpResponseRedirect('/')


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
                return JsonResponse(
                    data={
                        'form_id': 'password-auth',
                        'status': 400,
                        'error': 'Неправильная почта или пароль'
                    },
                    status=200
                )
            elif password:
                return JsonResponse(
                    data={
                        'form_id': 'email-auth',
                        'status': 400,
                        'error': 'Пожалуйста, введите почту'
                    },
                    status=200
                )
            elif email:
                return JsonResponse(
                    data={
                        'form_id': 'password-auth',
                        'status': 400,
                        'error': 'Пожалуйста, введите пароль'
                    },
                    status=200
                )
            return JsonResponse(
                data={
                    'form_id': 'password-auth',
                    'status': 400,
                    'error': 'Пожалуйста, введите почту и пароль'
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
    else:
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
                    f'ingredient-name-{elem.split("-")[-1]}').capitalize() + ':'
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
            uploaded_filename = '_'.join(transliterate.translit(request.FILES['photo'].name, reversed=True).split())
        except transliterate.exceptions.LanguageDetectionError:
            uploaded_filename = '_'.join(request.FILES['photo'].name.split())

        try:
            os.mkdir(os.path.join(settings.MEDIA_ROOT, folder))
        except:
            pass

        os.mkdir(os.path.join(settings.MEDIA_ROOT, folder, second_folder))

        full_filename = os.path.join(
            settings.MEDIA_ROOT, folder, second_folder, uploaded_filename)
        fout = open(full_filename, 'wb+')

        file_content = ContentFile(request.FILES['photo'].read())

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

    return render(request, 'recipes/post.html', {
        'recipe': recipe,
        'is_auth': request.user.is_authenticated,
        'cats': Category.objects.all(),
        'title': f'{recipe.title} — Мама, я повар!'
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
        profile_data = UserProfile.objects.get(user=id)
    except:
        profile_data = None
    objs = Recipe.objects.filter(author_id=id)
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
        os.remove(user.avatar.path)
        user.avatar = request.FILES['file']
        user.save()
    else:
        recipes = Recipe.objects.filter(author_id=request.user.id)
        new_photo = UserProfile(user=request.user, avatar=request.FILES['file'], posts=len(recipes))
        new_photo.save()
    return HttpResponseRedirect(f'user/{str(request.user.id)}/')


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
    recipes = Recipe.objects.filter(cat_id=id)
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
        
        rmtree(os.path.join(settings.MEDIA_ROOT, 'recipes', recipe.folder_id))

        recipe.delete()

        return HttpResponseRedirect('/')


def settings_profile(request):
    if request.method == 'POST':
        form = ProfileSettingsForm(request.POST)
        username = request.POST.get('username')
        if form.is_valid():
            if username:
                profile = UserProfile.objects.get(user_id=request.user.id)
                profile.description = form.cleaned_data['description']
                profile.save()
                if form.cleaned_data['username'] != request.user.username:
                    user = User.objects.get(id=request.user.id)
                    user.username = form.cleaned_data['username']
                    user.save()
                return render(request, 'recipes/settings/profile.html', {
                    'title': 'Настройки профиля - Мама, я повар!',
                    'username': User.objects.get(id=request.user.id).username
                })
            else:
                return render(request, 'recipes/settings/profile.html', {
                    'title': 'Настройки профиля - Мама, я повар!',
                    'username': User.objects.get(id=request.user.id).username,
                    'error': "Введите имя!"
                })
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
                    return render(request, 'recipes/settings/account.html', {
                        'title': "Настройки аккаунта - Мама, я повар!",
                        'error': 'Пользователь с такой почтой уже существует!'
                    })
                elif request.POST.get("email") and request.POST.get('email') != request.user.email:
                    user = User.objects.get(id=request.user.id)
                    user.email = form.cleaned_data['email']
                    user.save()
                    return render(request, 'recipes/settings/account.html', {'title': "Настройки аккаунта - Мама, я повар!"})
                elif not form.cleaned_data['email']:
                    return render(request, 'recipes/settings/account.html', {
                        'title': "Настройки аккаунта - Мама, я повар!",
                        'error': 'Введите почту!'
                    })
        elif 'password_old' in request.POST:  # Установка нового пароля
            form = ChangePasswordForm(request.POST)
            if form.is_valid():
                if form.cleaned_data['password_old'] and form.cleaned_data['password_new'] and form.cleaned_data['password_new_repeat']:
                    if check_password(form.cleaned_data['password_old'], User.objects.get(id=request.user.id).password):
                        if form.cleaned_data['password_new'] == form.cleaned_data['password_new_repeat']:
                            user = User.objects.get(id=request.user.id)
                            user.set_password(form.cleaned_data['password_new'])
                            user.save()
                            return render(request, 'recipes/settings/account.html', {
                                'title': "Настройки аккаунта - Мама, я повар!"
                            })
                        elif form.cleaned_data['password_new'] != form.cleaned_data['password_new_repeat']:
                            return render(request, 'recipes/settings/account.html', {
                                'title': "Настройки аккаунта - Мама, я повар!",
                                'error_same': "Пароли не совпадают!",
                                'old': form.cleaned_data['password_old']
                            })
                    else:
                        return render(request, 'recipes/settings/account.html', {
                            'title': "Настройки аккаунта - Мама, я повар!",
                            'error_wrong': "Введен неверный пароль!",
                            'new': form.cleaned_data['password_new'],
                            'new_repeat': form.cleaned_data['password_new_repeat']
                        })
                else:
                    return render(request, 'recipes/settings/account.html', {
                        'title': "Настройки аккаунта - Мама, я повар!",
                        'error_wrong': "Введите данные!"
                    })
        elif len(request.POST) == 1:  # Удаление аккаунта
            # likes
            for elem in Like.objects.filter(like_user_id=request.user.id):
                elem.delete()

            # subs
            for elem in Subscribe.objects.filter(subscribe_from_id=request.user.id):
                elem.delete()

            for elem in Subscribe.objects.filter(subscribe_to_id=request.user.id):
                elem.delete()

            # user profile
            for elem in UserProfile.objects.filter(user_id=request.user.id):
                elem.delete()

            # bookmarks
            for elem in Bookmark.objects.filter(book_user_id=request.user.id):
                elem.delete()

            # recipes
            recipes = Recipe.objects.filter(author_id=request.user.id)
            for elem in recipes:
                for el in StepImages.objects.filter(recipe_id=elem.id):
                    el.delete()
                elem.delete()

            user = User.objects.get(id=request.user.id)
            user.delete()
            return HttpResponseRedirect('/')
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

        return render(request, 'recipes/edit_recipe.html', {'recipe': recipe})
    elif request.method == 'POST':
        print(request.FILES)
        
        form = RecipeForm(request.POST)
        if not form.is_valid():
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
            recipe.cooking_time = f'{form.cleaned_data["cooking_time_hours"]}:{form.cleaned_data["cooking_time_minutes"]}'

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
                    itog1.append([x.capitalize() for x in request.POST[elem].replace('\r', '').split('\n') if x != ''])

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
            
            print('------ photo name: ', uploaded_filename)

            full_filename = os.path.join(
                settings.MEDIA_ROOT, folder, second_folder, uploaded_filename)
            
            print('------ full filename: ', full_filename)
            fout = open(full_filename, 'wb+')

            file_content = ContentFile(request.FILES['photo'].read())

            for chunk in file_content.chunks():
                fout.write(chunk)
            fout.close()

            recipe.photo = os.path.join(settings.MEDIA_ROOT, folder, second_folder, uploaded_filename)

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
                
            
            return HttpResponseRedirect('/')
    return HttpResponseRedirect('/')


def error_404(request, exception):
    return HttpResponseRedirect('/')
