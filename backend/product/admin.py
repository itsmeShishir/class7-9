from django.contrib import admin
from .models import Category, Contact, CustomUser, Product, Cart, CartItem, Order, OrderItem
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Category)
admin.site.register(Contact)
admin.site.register(Product)
admin.site.register(CartItem)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(OrderItem)