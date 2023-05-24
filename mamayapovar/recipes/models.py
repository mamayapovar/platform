import pymorphy2
from django.contrib.auth.models import User
from datetime import datetime, timezone, timedelta
from django.db import models
import sys
import locale
from math import floor
from os.path import splitext
from uuid import uuid4
from django.core.files.storage import FileSystemStorage

if sys.platform == 'win32':
    locale.setlocale(locale.LC_ALL, 'rus_rus')
else:
    locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')

morph = pymorphy2.MorphAnalyzer()


class UUIDFileStorage(FileSystemStorage):
    def get_available_name(self, name, max_length=None):
        _, ext = splitext(name)
        return uuid4().hex + ext


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    cooking_time = models.CharField(max_length=20)
    persons = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='', null=True, blank=True, verbose_name='Изображение')
    cat = models.ForeignKey('Category', on_delete=models.DO_NOTHING)
    author_id = models.IntegerField(null=True)
    ingredients = models.TextField(blank=True)
    steps = models.TextField(blank=True)
    folder_id = models.CharField(max_length=7, blank=True)
    is_approved = models.BooleanField(default=False)

    def get_beautiful_ingredients(self):
        ings = len(self.ingredients)
        return f"{ings} {morph.parse('ингредиент')[0].make_agree_with_number(ings).word}"

    def get_formatted_time(self):
        self.time_create: datetime
        now = datetime.now(timezone.utc)
        deltatime = now - self.time_create
        if deltatime < timedelta(minutes=1):
            return "только что"
        elif deltatime < timedelta(hours=1):
            return f"{deltatime.total_seconds() // 60:.0f} {morph.parse('минута')[0].make_agree_with_number(floor(deltatime.total_seconds() // 60)).word}"
        elif deltatime < timedelta(days=1):
            return f"{deltatime.total_seconds() // 3600:.0f} {morph.parse('час')[0].make_agree_with_number(floor(deltatime.total_seconds() // 3600)).word}"
        elif deltatime < timedelta(days=2):
            return "вчера"
        elif deltatime < timedelta(days=365):
            return f"{self.time_create.strftime('%d %b')}"
        else:
            return f"{self.time_create.strftime('%d.%m.%Y')}"

    def get_formatted_time_full(self):
        return f"{self.time_create.strftime('%Y-%m-%d %H:%M')}"

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-time_create']


class StepImages(models.Model):
    recipe = models.ForeignKey('Recipe', default=None, on_delete=models.DO_NOTHING)
    image = models.ImageField(null=True, blank=True, verbose_name='Image')


class Category(models.Model):
    name = models.CharField(max_length=50, db_index=True)
    description = models.TextField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Bookmark(models.Model):
    class Meta:
        db_table = 'bookmarks'
        ordering = ['-time_created']

    book_post = models.ForeignKey('Recipe', on_delete=models.DO_NOTHING)
    book_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    time_created = models.DateTimeField(auto_now_add=True, null=True)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    description = models.TextField(blank=True)
    posts = models.IntegerField()
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True, default='/avatars/placeholder-avatar.jpg')

    def __unicode__(self):
        return self.user


class Like(models.Model):
    class Meta:
        db_table = 'likes'

    likes = models.IntegerField(default=0)
    like_post = models.ForeignKey('Recipe', on_delete=models.DO_NOTHING)
    like_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    status = models.BooleanField(default=False)


class Subscribe(models.Model):
    class Meta:
        db_table = 'subscribe'
        ordering = ['-time_created']

    subscribe_from = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='subscribe_from')
    subscribe_to = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='subscribe_to')
    time_created = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    class Meta:
        db_table = 'comment'
        ordering = ['-time_created']

    com_post = models.ForeignKey('Recipe', on_delete=models.DO_NOTHING)
    com_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    comment = models.TextField(blank=True)
    time_created = models.DateTimeField(auto_now_add=True)

    def get_formatted_time(self):
        self.time_created: datetime
        now = datetime.now(timezone.utc)
        deltatime = now - self.time_created
        if deltatime < timedelta(minutes=1):
            return "только что"
        elif deltatime < timedelta(hours=1):
            return f"{deltatime.total_seconds() // 60:.0f} {morph.parse('минута')[0].make_agree_with_number(floor(deltatime.total_seconds() // 60)).word}"
        elif deltatime < timedelta(days=1):
            return f"{deltatime.total_seconds() // 3600:.0f} {morph.parse('час')[0].make_agree_with_number(floor(deltatime.total_seconds() // 3600)).word}"
        elif deltatime < timedelta(days=2):
            return "вчера"
        elif deltatime < timedelta(days=365):
            return f"{self.time_created.strftime('%d %b')}"
        else:
            return f"{self.time_created.strftime('%d.%m.%Y')}"

    def get_formatted_time_full(self):
        return f"{self.time_created.strftime('%Y-%m-%d %H:%M')}"


class Approve(models.Model):
    class Meta:
        db_table = 'approve'

    post = models.ForeignKey('Recipe', on_delete=models.DO_NOTHING)
    status = models.BooleanField(default=False)
