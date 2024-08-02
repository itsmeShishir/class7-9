from django.urls import path
from category import views
urlpatterns = [
        path("contact/", views.contact_view, 
         name="contact"),
        path("successful/", views.successful, 
         name="successful"),
        path("indexs/", views.contact_forms, 
         name="contact"),
        path("register/", views.register_view, 
         name="register"),
        path("login", views.login_view, name="login"),
        path("category/", views.category_view, 
         name="category"),
        path('/logout', views.user_logout, name="logout") 
]



