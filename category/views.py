from django.shortcuts import render, redirect
from .models import Contact
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
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = AuthenticationForm(username = username,password = password )
            login(request, user)
            return redirect('home')
    else:
        form = UserRegistration()
    return render(request, 'register.html', {'form': form})

def successful(request):
    return render(request, "successfull.html")

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


