from django.urls import path
from .views import *

urlpatterns = [
    # User Registration and Login
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginView.as_view(), name="login"),

    # Product Endpoints
    path("product/", ProductViewSet.as_view({'get': 'list'}), name="product"),
    path("allProduct/", AllProductView.as_view(), name="allProduct"),
    path("createProduct/", CreateProductView.as_view(), name="createProduct"),
    path("singleProduct/<int:pk>/", UpdateDeleteProductView.as_view(), name="singleProduct"),
    path("updateDelete/<int:pk>/", UpdateDeleteProductView.as_view(), name="updateDeleteProduct"),

    # Contact Endpoints
    path("contact/", AllContactsView.as_view(), name="contact"),
    path("contact/<int:pk>/", SingleContactView.as_view(), name="singleContact"),

    # Category Endpoints
    path("category/", CategoryViewSet.as_view({'get': 'list', 'post': 'create'}), name="category"),
    path("addCategory/", CreateCategoryView.as_view(), name="addCategory"),
    path("category/<int:pk>/", SingleCategoryView.as_view(), name="singleCategory"),
    path("category/product/<int:id>/", ProductCategoryView.as_view(), name="ProductCategory"),

    # Cart and Order Endpoints
    path("cart/", CartViewSet.as_view({'get': 'list', 'post': 'create'}), name="cart"),
    path("cart/<int:pk>/", CartViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="cartDetail"),
    path("cart-items/", CartItemViewSet.as_view({'get': 'list', 'post': 'create'}), name="cartItems"),
    path("orders/", OrderViewSet.as_view({'get': 'list', 'post': 'create'}), name="orders"),
    path("orders/<int:pk>/", OrderViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="orderDetail"),
    path("order-items/", OrderItemViewSet.as_view({'get': 'list', 'post': 'create'}), name="orderItems"),
    path("order-items/<int:pk>/", OrderItemViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="orderItemDetail"),
    path("create-order/", CreateOrderView.as_view(), name="createOrder"),

    #Users
    path("allUser/", UserView.as_view(), name="allUser"),
    path("user/<int:pk>", UserUpdateDeleteView.as_view(), name="user")
]
