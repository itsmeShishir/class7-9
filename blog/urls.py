from django.urls import path
from blog import views
urlpatterns = [
    path("blogs/", views.Blogs, name="blogs-items"),
    path("blog/<int:pk>/", views.blogItem, name="blogs-item")
]