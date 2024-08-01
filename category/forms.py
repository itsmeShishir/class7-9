from django import forms
from .models import Contact
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegistration(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ( "name","email", "description", "number" )

class ContactForms(forms.Form):
    name = forms.CharField(max_length=30, required=True)
    email = forms.EmailField(required= True)
    description = forms.CharField(required=True)
    number = forms.CharField(max_length=11, required=True)




