from django.shortcuts import render, get_object_or_404
from .models import Blog
# Create your views here.
#function and class base views, template inherit, contact us = POST, 
from category.models import Category

def Blogs(request):
    blogs = Blog.objects.all()
    category = Category.objects.all()
    context = {
        'blogs':blogs,
        'category': category
    }

    return render(request, "blog.html", context)

def blogItem(request, pk):
    blogs = get_object_or_404(Blog, pk = pk)
    context = {
        'blogs':blogs,
    }
    return render(request, "singleblog.html", context)



