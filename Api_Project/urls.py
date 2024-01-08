"""Api_Project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from API.views import *
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', login_view, name='login'),
    path('logout/', LogoutView.as_view(next_page='login'), name="logout"),
    path('Register/',RegisterView.as_view(),name="register"),
    path('Forget/',ForgetPass.as_view(),name="forget"),
    path('Home/', Home.as_view(), name="home"),
    path('PowerBI/', PowerBi.as_view(), name="powerbi"),
    path('Dashboard/', Graficas.as_view(), name="dashboard"),
    path('Clientes/', Clientes.as_view(), name="clientes"),
    path('MederyFarma/', MederyFarma.as_view(), name="mederyfarma"),
    path('Producto/<int:producto_id>/', agregar_al_carrito, name="agregar_al_carrito"),
    path('Carrito/', Ver_Carrito.as_view(), name="carrito"),
    path('Borrar_Carrito/', borrar_carrito, name="borrar_carrito"),
    path('Realizar_Compra/', realizar_compra, name="realizar_compra"),
    path('Detalle_Producto/<int:producto_id>/', Detalle_Producto.as_view(), name="detalle_producto"),
    path('Mis_Compras/', Mis_Compras.as_view(), name="mis_compras"),
    path('Detalle_Compra/<int:venta_id>/', Detalle_Compra.as_view(), name="detalle_compra"),
    path('disminuir/<int:id_detalle>/', disminuir_cantidad, name='disminuir_cantidad'),
    path('aumentar/<int:id_detalle>/', aumentar_cantidad, name='aumentar_cantidad'),
    path('eliminar/<int:id_detalle>/', eliminar_producto, name='eliminar_producto'),
]
