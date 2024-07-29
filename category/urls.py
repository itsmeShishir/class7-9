from django.urls import path
from category import views
urlpatterns = [
    path("contact/", views.contact_view, 
         name="contact"),
    path("successful/", views.successful, 
         name="successful")
]