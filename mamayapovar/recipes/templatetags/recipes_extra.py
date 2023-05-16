# -*- coding: utf-8 -*-

from django import template
from django.contrib.auth.models import User
from recipes.models import Bookmark, UserProfile, Like, Subscribe, Recipe, Comment
import pymorphy2

morph = pymorphy2.MorphAnalyzer()
register = template.Library()


@register.simple_tag
def get_bookmark_status(id_, user_id):
    try:
        return True if Bookmark.objects.get(book_post_id=id_, book_user_id=user_id) else False
    except:
        return False


@register.simple_tag
def is_avatar(id_):
    try:
        return True if UserProfile.objects.get(user=id_).avatar else False
    except:
        return False


@register.simple_tag
def get_avatar_url(id_):
    try:
        return UserProfile.objects.get(user=id_).avatar.url if UserProfile.objects.get(user=id_).avatar else None
    except:
        return None


@register.simple_tag
def get_likes_count(id_):
    return sum([x.likes for x in Like.objects.filter(like_post_id=id_)])


@register.simple_tag
def get_likes_count_of_user(id_):
    recipes = Recipe.objects.filter(author_id=id_)
    try:
        likes = 0
        for elem in recipes:
            for el in Like.objects.filter(like_post=elem):
                likes += el.likes
        return likes
    except:
        return 0


@register.simple_tag
def get_likes_status(id_, user_id):
    try:
        return Like.objects.get(like_post_id=id_, like_user_id=user_id).status
    except:
        return False


@register.simple_tag
def get_sub_status(id1, id2):
    return True if Subscribe.objects.filter(subscribe_from_id=id1, subscribe_to_id=id2) else False


@register.simple_tag
def get_all_subscribers(id_):
    subs = Subscribe.objects.filter(subscribe_from_id=id_)
    new_subs = []
    for elem in subs:
        new_subs.append(User.objects.get(id=elem.subscribe_to_id))
    return new_subs


@register.simple_tag
def get_count_of_subscribers(id_):
    subs = Subscribe.objects.filter(subscribe_to_id=id_)
    new_subs = []
    for elem in subs:
        new_subs.append(User.objects.get(id=elem.subscribe_from_id))
    return len(new_subs)


@register.simple_tag
def get_correct_path(id_):
    return f"/user/{id_}/"


@register.simple_tag
def get_server_media_url(url):
    return "/".join(url.split("/")[1:])


@register.simple_tag
def get_category_id_from_url(url):
    return int(url[:-1].split('/')[-1])


@register.simple_tag
def get_category_id_from_recipe(url):
    idf = int(url[:-1].split('/')[-1])
    return Recipe.objects.get(id=idf).cat_id


@register.simple_tag
def get_user(url):
    idf = int(url[:-1].split('/')[-1])
    return User.objects.get(id=idf)


@register.simple_tag
def get_email(id_):
    return User.objects.get(id=id_).email


@register.simple_tag
def get_user_profile(id_):
    try:
        profile_data = UserProfile.objects.get(user_id=id_)
    except:
        profile_data = None
    return profile_data


@register.simple_tag
def get_amount(id_):
    return


@register.simple_tag
def get_comments_count(id_):
    return len(Comment.objects.filter(com_post_id=id_))

