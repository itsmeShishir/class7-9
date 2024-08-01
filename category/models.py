from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    img = models.ImageField(("category_img"), upload_to=None, height_field=None, width_field=None, max_length=None)
    username = models.ForeignKey(User,blank = True, null= True , on_delete=models.CASCADE )
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title}"

class Slider(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    img = models.ImageField(upload_to= "slider/",
                             blank=True, null=True)

    def __str__(self):
        return f"{self.title}"

class Contact(models.Model):
    name= models.CharField(max_length=30)
    email = models.EmailField(blank= True, null=True)
    description = models.TextField()
    number = models.CharField(max_length=11)

    def __str__(self):
        return f"{self.name}"


