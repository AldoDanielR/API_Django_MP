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
    path('Dashboard/', Graficas.as_view(), name="dashboard"),
    path('Chart/', Chart.as_view(), name="chart"),
    path('Pago/', PagoMP.as_view(), name="pago"),
    path('MederyFarma/', MederyFarma.as_view(), name="mederyfarma"),
    path('Producto/<int:producto_id>/', agregar_al_carrito, name="agregar_al_carrito"),
    path('Carrito/', Ver_Carrito.as_view(), name="carrito"),
    path('Detalle_Producto/<int:producto_id>/', Detalle_Producto.as_view(), name="detalle_producto"),
]
