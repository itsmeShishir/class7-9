from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from core import views
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.Home, name = "home"),
    path("", include('blog.urls')),
    path("", include('category.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#CLB2770E7F
