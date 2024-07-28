from django.http import HttpResponse
from django.shortcuts import render

def Home(request):
    data = {
        "name": "Shishir",
        'lists': [1,2,3,4,5],
        'list2':["a", "b", "c", 'd']
    }
    return render(request, "home.html", data)

def Contact(request):
    return render(request, "index.html")

def AboutUs(request):
    return HttpResponse("<h2>THis is my AboutUS page</h2>")

def Blogs(request, blogid):
    return render(request, "index.html")

