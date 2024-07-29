from django.shortcuts import render, redirect
from .forms import ContactForm

# Create your views here.

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(successful)
    else:
        form = ContactForm()
    return render(request, "contact.html", 
                  {'form':form} )

def successful(request):
    return render(request, "successfull.html")



