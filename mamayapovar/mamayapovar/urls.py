from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from recipes.models import *
from recipes.views import admin_recipe_deleting


urlpatterns = [
    path('admin/recipes/recipe/<int:id>/delete/', admin_recipe_deleting, name='admin_delete'),
    path('admin/', admin.site.urls),
    path('', include('recipes.urls')),
    path("__reload__/", include("django_browser_reload.urls"))
]

handler404 = 'recipes.views.error_404'

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
