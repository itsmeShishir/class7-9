from django.shortcuts import render, redirect, get_object_or_404

from blog.models import Blog
from .models import Category, Contact
from .forms import ContactForm, ContactForms, UserRegistration
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm

# Create your views here.
def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        form.save()
            
    else:
        form = ContactForm()
    return render(request, "contact.html", 
                  {'form':form} )

def successful(request):
    return render(request, "successfull.html")


def register_view(request):
    if request.method == 'POST':
        form = UserRegistration(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = UserRegistration()
    return render(request, 'register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
            return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    return redirect(request, )

def successful(request):
    logout(request)
    return redirect('home')

def contact_forms(request):
    if request.method == "POST":
        form = ContactForms(request.POST)
        if form.is_valid():
            Contact.objects.create(
                name = form.cleaned_data['name'],
                email = form.cleaned_data['email'],
                description = form.cleaned_data['description'],
                number = form.cleaned_data['number']
            )
            return redirect('home')
            
    else:
        form = ContactForms()
    return render(request, "index.html", 
                  {'form':form} )

def successful(request):
    return render(request, "successfull.html")

def category_view(request):
    category = Category.objects.all()
    return render(request, "category.html", {'category':category})

def category_views(request, pk):
    category = Category.objects.filter(pk = pk)
    blogs = Blog.objects.all()
    return render(request, "category.html", {'category':category})


def user_logout(request):
    logout(request)
    return redirect('home')