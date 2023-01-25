from django.urls import path, re_path
from django.conf.urls.static import static

from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('postindex/', postindex, name='registration'),
    path('postlogin/', postlogin, name='login'),
    path('postlogout/', postlogout, name='logout'),
    path('new-recipe/', new_recipe, name='new_recipe'),
    path('recipe/<int:recipe_id>/', recipe, name='recipe'),
    re_path(r'^recipe/(?P<pk>\d+)/bookmark/$', bookmark_post, name='bookmark_post'),
    path('bookmarks/', bookmarks, name='bookmarks'),
    path('user/<int:id>/', user_profile, name='user_profile'),
    path('user/change_profile_picture', change_profile_picture, name='change_profile_picture'),
    re_path(r'^recipe/(?P<pk>\d+)/like/$', like_post, name='like_post'),
    re_path(r'^recipe/(?P<pk>\d+)/subscribe/$', subscribe_post, name='subscribe'),
    path('category/<int:id>/', category, name="category"),
    path('delete_recipe/<int:id>', delete_recipe, name='delete_recipe'),
    path('settings/profile/', settings_profile, name='settings_profile'),
    path('settings/account/', settings_account, name='settings_account'),
    path('edit_recipe/<int:id>/', edit_recipe, name='edit_recipe'),
    path('search/', search, name='search')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
