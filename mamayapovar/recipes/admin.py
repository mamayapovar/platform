from django.contrib import admin
from django.utils.safestring import mark_safe
from django.urls import reverse

from .models import *


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_approved', 'get_author_name', 'get_html_photo')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'description')
    fields = ('title', 'description', 'cooking_time', 'persons', 'photo', 'get_html_photo', 'cat', 'ingredients', 'steps', 'is_approved')
    readonly_fields = ('time_create', 'get_html_photo')

    def get_html_photo(self, object):
        if object.photo:
            print(object.photo.url)
            return mark_safe(f"<img src='{object.photo.url}' width=70>")

    def get_author_name(self, object):
        return User.objects.get(id=object.author_id).username

    get_html_photo.short_description = 'Фото рецепта'


class ApproveAdmin(admin.ModelAdmin):
    list_display = ('id', 'post', 'status', 'get_approve', 'get_deny')
    list_display_links = ('post',)

    def get_approve(self, object):
        return mark_safe(f"<a href='/approve_button/{object.post.id}' class='accept' style='color: #FFF; background: #44CC44; padding: 10px 15px; border-radius: 10px;'>ACCEPT <span class='fa fa-check'></span></a>")

    def get_deny(self, object):
        return mark_safe(f"<a href='/deny_button/{object.post.id}' class='deny' style='color: #FFF; background: tomato; padding: 10px 15px; border-radius: 10px;'>DENY <span class='fa fa-close'></span></a>")


admin.site.register(Approve, ApproveAdmin)
admin.site.register(Recipe, RecipeAdmin)
