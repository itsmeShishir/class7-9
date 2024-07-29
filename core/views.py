from django.http import HttpResponse
from django.shortcuts import render
from category.models import Slider, Category
from blog.models import Blog
def Home(request):
    slider = Slider.objects.all()
    category = Category.objects.all()
    blog = Blog.objects.all()
    context = {
       'slider': slider,
       'category' :category,
       'blog' : blog
    }
    return render(request, "home.html", context)

def Contact(request):
    return render(request, "index.html")

def AboutUs(request):
    return HttpResponse("<h2>THis is my AboutUS page</h2>")

def Blogs(request, blogid):
    return render(request, "index.html")

