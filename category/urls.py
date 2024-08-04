from django.urls import path
from category import views
urlpatterns = [
        path("contact/", views.contact_view, 
         name="contacts"),
        path("successful/", views.successful, 
         name="successful"),
        path("indexs/", views.contact_forms, 
         name="contact"),
        path("register/", views.register_view, 
         name="register"),
        path("login", views.login_view, name="login"),
        path("category/", views.category_views, 
        name="category"),
        path('/logout', views.user_logout, name="logout"), 
        path("category/<int:pk>", views.category_view, 
        name="categoryblog"),
        path("contact/update/<int:pk>/", views.update_contact, name="update_contact"),
        path("contact/delete/<int:pk>/", views.delete_contact, name="delete_contact")
]



