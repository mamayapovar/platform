from django.contrib import admin
from django.utils.safestring import mark_safe
from django.urls import reverse

from .models import *


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_approved', 'get_author_name', 'get_html_photo')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'description')
    fields = ('title', 'description', 'get_beauty_cooking_time', 'persons', 'get_html_photo', 'cat', 'get_beauty_ingrediens', 'get_beauty_steps', 'is_approved')
    readonly_fields = ('title', 'description', 'get_beauty_cooking_time', 'persons', 'get_html_photo', 'cat', 'get_beauty_ingrediens', 'get_beauty_steps')

    def get_html_photo(self, object):
        if object.photo:
            print(object.photo.url)
            return mark_safe(f"<img src='{object.photo.url}' width=70>")

    def get_beauty_cooking_time(self, object):
        if len(object.cooking_time.split(':')) == 2 and object.cooking_time.split(':')[0] != '':
            if object.cooking_time.split(':')[1] == '0':
                cook = object.cooking_time.split(':')
                object.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word}"
            elif object.cooking_time.split(':')[0] != '0':
                cook = object.cooking_time.split(':')
                object.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word} " \
                                      f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
            else:
                cook = object.cooking_time.split(':')
                object.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
        else:
            cook = object.cooking_time.split(':')
            object.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"

        return object.cooking_time

    def get_beauty_ingrediens(self, object):
        object.ingredients = [[x.split(':')[0], ' '.join(x.split(':')[1].split('-'))] for x in
                              object.ingredients.split(';')]
        html = '<div>'
        for elem in object.ingredients:
            html += f'<p>{elem[0]} - {elem[1]}</p>'
        html += '</div>'

        return mark_safe(html)

    def get_beauty_steps(self, object):
        object.steps = [[x.split(':')[0], x.split(':')[1].split('\n')] for x in object.steps.split(';')]
        step_photos = [x for x in StepImages.objects.filter(recipe_id=object.id)]
        step_photos.sort(key=lambda x: int(str(x.image.url).split('/')[-1].split('.')[0]))
        is_exist = False
        if step_photos:
            for el in object.steps:
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
            for elem in object.steps:
                elem.append(None)

        html = '<div>'
        for elem in object.steps:
            desc = "<br>".join(elem[1])
            if elem[2]:
                html += f'<div style="margin-bottom: 20px"><h3>Шаг {elem[0]}:</h3><br> {desc}<br><img src="{elem[2].url}" width="140" style="margin-top: 8px"></div>'
            else:
                html += f'<div style="margin-bottom: 20px"><h3>Шаг {elem[0]}:</h3><br> {desc}</div>'
        html += '</div>'

        return mark_safe(html)

    def get_author_name(self, object):
        return User.objects.get(id=object.author_id).username

    get_html_photo.short_description = 'Фото рецепта'
    get_author_name.short_description = 'Автор'
    get_beauty_cooking_time.short_description = 'Время приготовления'
    get_beauty_steps.short_description = 'Шаги'
    get_beauty_ingrediens.short_description = 'Ингредиенты'



class ApproveAdmin(admin.ModelAdmin):
    list_display = ('id', 'post', 'status', 'get_approve', 'get_deny')
    list_display_links = ('post',)

    def get_approve(self, object):
        return mark_safe(f"<a href='/approve_button/{object.post.id}' class='accept' style='color: #FFF; background: rgba(137, 203, 36, 1); padding: 8px 16px; border-radius: 8px;'>ПРИНЯТЬ <span class='fa fa-check'></span></a>")

    def get_deny(self, object):
        return mark_safe(f"<a href='/deny_button/{object.post.id}' class='deny' style='color: #FFF; background: rgba(249, 50, 50, 1); padding: 8px 16px; border-radius: 8px;'>ОТКЛОНИТЬ <span class='fa fa-close'></span></a>")

    get_approve.short_description = 'Одобрение'
    get_deny.short_description = 'Отклонение'


admin.site.register(Approve, ApproveAdmin)
admin.site.register(Recipe, RecipeAdmin)
