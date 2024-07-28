from django.db import models

from category.models import *

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    img = models.ImageField(upload_to="blog_image/", height_field=None, width_field=None, max_length=None)
    username = models.CharField(max_length=30)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}, {self.description}"

# python manage.py makemigrations
# python manage.py migrate
# python manage.py runserver
