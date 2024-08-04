from django.shortcuts import render, redirect, get_object_or_404

from blog.models import Blog
from .models import Category, Contact
from .forms import ContactForm, ContactForms, UserRegistration
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.views.decorators.http import require_http_methods

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

def user_logout(request):
    logout(request)
    return redirect('hone')


def category_views(request):
    category = Category.objects.all()
    return render(request, "category.html", {'category':category})


def category_view(request, pk):
    category = get_object_or_404(Category, pk = pk)
    blogs = Blog.objects.filter(category = category)
    context = {
        'category': category,
        'blogs': blogs
    }
    return render(request, "blogcategory.html", {'context':context})

def successfully(request):
    return render(request, "successfull.html")

def contact_all(request):
    contact = Contact.objects.all()
    return render(request, "allcontact.html", {"contact": contact})

@require_http_methods(["GET", "POST"])
def update_contact(request, pk):
    contact = get_object_or_404(Contact, pk = pk)
    if request.method == "POST":
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
            return redirect('successfull')
    else:
        form  = ContactForm(instance=contact)
    
    return render(request, 'update_contact.html', {'form': form, 'contact':contact})


@require_http_methods(["GET", "POST"])
def delete_contact(request, pk):
    contact = get_object_or_404(Contact, pk = pk)
    if request.method== "POST":
        contact.delete()
        return redirect('successfull')
    
    return render(request, 'delete_contact.html')

