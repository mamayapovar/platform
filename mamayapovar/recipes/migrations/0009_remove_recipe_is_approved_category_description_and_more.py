# Generated by Django 4.1.3 on 2023-05-24 10:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recipes', '0008_remove_recipe_is_approved_category_description_and_more'),
    ]

    operations = []
