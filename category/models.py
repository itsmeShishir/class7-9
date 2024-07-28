from django.db import models

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    img = models.ImageField(("category_img"), upload_to=None, height_field=None, width_field=None, max_length=None)
    username = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title}"

