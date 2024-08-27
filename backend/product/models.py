from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser, Group, Permission
from core import settings

User = settings.AUTH_USER_MODEL

# Create your models here.
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    is_admin = models.BooleanField(default=False)
    is_user = models.BooleanField(default=True)

    groups = models.ManyToManyField(
        Group,
        related_name='charging_user_set',
        blank=True,
        help_text=('The groups this user belongs to. A user will get all permissions granted to each of their groups.'),
        verbose_name=('groups'),
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='charging_user_set',
        blank=True,
        help_text=('Specific permissions for this user.'),
        verbose_name=('user permissions'),
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email


class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    img = models.ImageField(("category_img"), upload_to=None, height_field=None, width_field=None, max_length=None)
    username = models.ForeignKey(CustomUser,blank = True, null= True , on_delete=models.CASCADE )
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title}"


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    Brand = models.CharField(max_length=255)
    img = models.ImageField(upload_to="product/", height_field=None, width_field=None, max_length=None, blank= True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    is_slider = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.title}"
   

class Contact(models.Model):
    firstName = models.CharField(max_length=150)
    lastName = models.CharField(max_length=150)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=12)
    description = models.TextField()

    def __str__(self):
        return f"{self.email}"


    
#cart, cartItem, Order, OrderItems
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now= True)

    def __set__(self):
        return f"CArt {self.id} for {self.user}"
    
    @property
    def total_price(self):
        total = sum([item.total_price for item in self.items.all()])
        return total
    
    @property
    def item_count(self):
        return self.items.count()
    
#
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveBigIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} * {self.product.title} in Cart {self.cart.id}"
    
    @property
    def total_price(self):
        return self.quantity * self.product.price
    
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart = models.OneToOneField(Cart, on_delete=models.SET_NULL, null=True,)
    ordered_at = models.DateTimeField(auto_now_add=True)
    id_paid = models.BooleanField(default=False)
    payment_date= models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Order {self.id} by {self.user}"
    
    @property
    def total_price(self):
        return self.cart.total_price if self.cart else 0
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="order_items", on_delete=models.CASCADE)
    product= models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity= models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} * {self.product.title} in Cart {self.order.id}"
    
    @property
    def order_price(self):
        return self.quantity * self.price
    


