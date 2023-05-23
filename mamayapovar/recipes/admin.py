from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'time_create', 'get_author_name', 'get_html_photo')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'description')

    def get_html_photo(self, object):
        if object.photo:
            print(object.photo.url)
            return mark_safe(f"<img src='{object.photo.url}' width=70>")

    def get_author_name(self, object):
        return User.objects.get(id=object.author_id).username


class ApproveAdmin(admin.ModelAdmin):
    list_display = ('id', 'post', 'status', 'get_approve', 'get_deny')
    list_display_links = ('post',)

    def get_approve(self, object):
        return mark_safe(f"<button data-approve-button data-pk='{object.post.id}' class='accept' style='color: #FFF; background: #44CC44; padding: 15px 20px; box-shadow: 0 4px 0 0 #2EA62E; border-radius: 10px;'>ACCEPT <span class='fa fa-check'></span></button>")

    def get_deny(self, object):
        return mark_safe(f"<button data-deny-button data-pk='{object.post.id}' class='deny' style='color: #FFF; background: tomato; padding: 15px 20px; box-shadow: 0 4px 0 0 #CB4949; border-radius: 10px;'>DENY <span class='fa fa-close'></span></button>")


admin.site.register(Approve, ApproveAdmin)
admin.site.register(Recipe, RecipeAdmin)
