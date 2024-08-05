from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from core import views
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.Home, name = "home"),
    path("contactus/", views.Contact, name = "contactus"),
    path("accounts/login/", auth_views.LoginView.as_view()),
    path("", include('blog.urls')),
    path("", include('category.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


#CLB2770E7F
