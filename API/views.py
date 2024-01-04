from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.

from django.views.generic.list import ListView
from rest_framework.views import APIView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView,UpdateView,DeleteView,FormView
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse_lazy
from django.contrib import messages
from sweetify import sweetify
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.http import HttpResponseBadRequest

from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.db.models import F, ExpressionWrapper, DecimalField
from django.db.models import Count
from django.urls import reverse
from .models import *
from django.conf import settings
import random
import mercadopago

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            if user.is_staff:
                login(request, user)
                messages.success(request, 'Bienvenido Administrador.')
                return redirect('home')
            else:
                login(request, user)
                messages.error(request, 'Bienvenido Cliente.')
                return redirect('mederyfarma')
        else:
            messages.error(request, 'Nombre de usuario o contraseña incorrectos.')

    return render(request, 'login.html')


class RegisterView(FormView):
    template_name = 'register.html'
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')

    def form_valid(self, form):
        # Registro del usuario
        user = form.save()
        
        # Iniciar sesión al usuario
        login(self.request, user)
        
        # Envío del correo electrónico de confirmación
        subject = 'Registro exitoso'
        message = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                /* Estilos CSS para el correo electrónico */
                body {{
                    font-family: Arial, sans-serif;
                    background-color: #4CAF50; /* Verde claro */
                }}
                .container {{
                    background-color: #ffffff;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }}
                h1 {{
                    color: #4CAF50; /* Verde claro */
                }}
                p {{
                    color: #000; /* Texto negro */
                }}
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Registro exitoso</h1>
                <p>Te has registrado con éxito en nuestro sitio web.</p>
                <p>Tu usuario es: {user.username}</p>
                <p>Tu contraseña es: {form.cleaned_data["password1"]}</p>
            </div>
        </body>
        </html>
        """

        from_email = 'alum.aldo.moviles@gmail.com'  # Cambia esto a tu dirección de correo electrónico
        recipient_list = [user.email]

        # Envía el correo electrónico con el mensaje formateado
        send_mail(subject, "", from_email, recipient_list, fail_silently=False, html_message=message)

        messages.success(self.request, 'Te has registrado con éxito. Se ha enviado un correo de confirmación a tu dirección de correo electrónico.')
        return HttpResponseRedirect(self.get_success_url())


class Home(LoginRequiredMixin, ListView):
    template_name="index.html"
    
    def get(self, request):
        username = request.user.username
        return render(request,self.template_name, {'username': username})

class ForgetPass(APIView):
    template_name="forget-pass.html"
    
    def get(self, request):
        return render(request,self.template_name)
    
class MederyFarma(LoginRequiredMixin, ListView):
    template_name = "mederyfarma.html"
    model = Producto
    context_object_name = 'productos'

    def get(self, request):
        username = request.user.username
        query = request.GET.get('q', '')
        if query:
            productos = Producto.objects.filter(nombre__icontains=query) | Producto.objects.filter(sustancia__icontains=query)
        else:
            all_productos = Producto.objects.all()
            productos = random.sample(list(all_productos), min(15, len(all_productos)))

        query = ''
        
        carrito, created = Carrito.objects.get_or_create(id_usuario=request.user)
        detalles = Detalle_Carrito.objects.filter(id_carrito=carrito)

        total = 0

        for detalle in detalles:
            subtotal = detalle.id_producto.precio * detalle.cantidad
            detalle.subtotal = subtotal
            detalle.save()
            total += subtotal
            
        articulos = Detalle_Carrito.objects.filter(id_carrito=carrito).values('id_producto').distinct().count()


        context = {
            'username': username,
            'productos': productos,
            'total': total,
            'articulos': articulos,
            'query': query
        }
        
        return render(request, self.template_name, context)
    
class Detalle_Producto(LoginRequiredMixin, ListView):
    template_name = "detalle_producto.html"

    def get(self, request, producto_id):
        username = request.user.username
        producto = get_object_or_404(Producto, id_producto=producto_id)

        productos_relacionados = Producto.objects.filter(sustancia=producto.sustancia).exclude(id_producto=producto.id_producto).order_by('?')[:3]
        
        carrito, created = Carrito.objects.get_or_create(id_usuario=request.user)
        detalles = Detalle_Carrito.objects.filter(id_carrito=carrito)

        total = 0

        for detalle in detalles:
            subtotal = detalle.id_producto.precio * detalle.cantidad
            detalle.subtotal = subtotal
            detalle.save()
            total += subtotal
            
        articulos = Detalle_Carrito.objects.filter(id_carrito=carrito).values('id_producto').distinct().count()

        context = {
            'username': username,
            'producto': producto,
            'total': total,
            'articulos': articulos,
            'productos': productos_relacionados
        }
        
        return render(request, self.template_name, context)
    
class Ver_Carrito(LoginRequiredMixin, ListView):
    template_name="carrito.html"
    
    def get(self, request):
        username = request.user.username
        productos = Producto.objects.all()
        productos_aleatorios = random.sample(list(productos), min(4, len(productos)))
        
        carrito, created = Carrito.objects.get_or_create(id_usuario=request.user)
        detalles = Detalle_Carrito.objects.filter(id_carrito=carrito).order_by('id_detalle_carrito')

        total = 0
        items = []

        for detalle in detalles:
            subtotal = detalle.id_producto.precio * detalle.cantidad
            detalle.subtotal = subtotal
            detalle.save()
            total += subtotal
            
            items.append({
                "id": str(detalle.id_detalle_carrito),
                "title": detalle.id_producto.nombre,
                "quantity": detalle.cantidad,
                "unit_price": float(detalle.id_producto.precio),
                "currency_id": "MXN"
            })
            
        articulos = Detalle_Carrito.objects.filter(id_carrito=carrito).values('id_producto').distinct().count()
        
        mp = mercadopago.SDK("APP_USR-7365618180421079-112515-ae2011dc2c3c35e29e0129628fcc313b-292126273")

        preference_data = {
            "items": items,
            "back_urls": {
                "success": request.build_absolute_uri(reverse('realizar_compra')),
                "failure": request.build_absolute_uri(reverse('carrito')),
                "pending": request.build_absolute_uri(reverse('mederyfarma')),
            },
            "auto_return": "approved",
            "external_reference": str(carrito.id_carrito),
        }

        preference_response = mp.preference().create(preference_data)
        preference = preference_response["response"]

        if detalles.exists():
            contexto = {
                'username': username,
                'productos': productos_aleatorios,
                'detalles': detalles,
                'total': total,
                'articulos': articulos,
                'titulo': 'Carrito de Compras',
                'PREFERENCE_ID': preference['id']
            }
        else:
            contexto = {
                'username': username,
                'productos': productos_aleatorios,
                'detalles': detalles,
                'total': total,
                'articulos': articulos,
                'titulo': 'Carrito de Compras',
            }

        return render(request, self.template_name, contexto)

class Mis_Compras(LoginRequiredMixin, ListView):
    template_name="compras.html"
    
    def get(self, request):
        usuario = request.user
        username = request.user.username
        
        carrito, created = Carrito.objects.get_or_create(id_usuario=request.user)
        detalles = Detalle_Carrito.objects.filter(id_carrito=carrito)

        total = 0

        for detalle in detalles:
            subtotal = detalle.id_producto.precio * detalle.cantidad
            detalle.subtotal = subtotal
            detalle.save()
            total += subtotal
            
        articulos = Detalle_Carrito.objects.filter(id_carrito=carrito).values('id_producto').distinct().count()
        ventas = Venta.objects.filter(id_usuario=usuario).order_by('-fecha')
        
        context = {
            'username': username,
            'total': total,
            'articulos': articulos,
            'ventas': ventas
        }
        
        
        return render(request,self.template_name,context)
    
class Detalle_Compra(LoginRequiredMixin, ListView):
    template_name = "detalle_compra.html"

    def get(self, request, venta_id):
        username = request.user.username
        venta = Venta.objects.get(id_venta=venta_id)
        detalles = Detalle_Venta.objects.filter(id_venta=venta)
        
        carrito, created = Carrito.objects.get_or_create(id_usuario=request.user)
        detalles_carrito = Detalle_Carrito.objects.filter(id_carrito=carrito)

        total = 0

        for detalle_carrito in detalles_carrito:
            subtotal = detalle_carrito.id_producto.precio * detalle_carrito.cantidad
            detalle_carrito.subtotal = subtotal
            detalle_carrito.save()
            total += subtotal
            
        articulos = Detalle_Carrito.objects.filter(id_carrito=carrito).values('id_producto').distinct().count()
        
        detalles = detalles.annotate(subtotal=ExpressionWrapper(
            F('cantidad') * F('id_producto__precio'),
            output_field=DecimalField()
        ))

        context = {
            'username': username,
            'venta': venta,
            'detalles': detalles,
            'total': total,
            'articulos': articulos,
        }
        
        return render(request, self.template_name, context)

class Chart(LoginRequiredMixin, ListView):
    template_name="chart.html"
    
    def get(self, request):
        return render(request,self.template_name)
    
class Graficas(LoginRequiredMixin, ListView):
    template_name="encuesta_chart.html"
    def post(self, request):
        return render(request, self.template_name)
    
    def get(self, request):
                pregunta1 = Encuesta.objects.values('frecuencia').annotate(total=Count('frecuencia'))
                etiquetas1 = [dato['frecuencia'] for dato in pregunta1]
                valores1 = [dato['total'] for dato in pregunta1]

                pregunta2 = Encuesta.objects.values('c_navegacion').annotate(total=Count('c_navegacion'))
                etiquetas2 = [dato['c_navegacion'] for dato in pregunta2]
                valores2 = [dato['total'] for dato in pregunta2]

                pregunta3 = Encuesta.objects.values('tipo_producto').annotate(total=Count('tipo_producto'))
                etiquetas3 = [dato['tipo_producto'] for dato in pregunta3]
                valores3 = [dato['total'] for dato in pregunta3]

                pregunta4 = Encuesta.objects.values('diseño').annotate(total=Count('diseño'))
                etiquetas4 = [dato['diseño'] for dato in pregunta4]
                valores4 = [dato['total'] for dato in pregunta4]

                pregunta5 = Encuesta.objects.values('colores').annotate(total=Count('colores'))
                etiquetas5 = [dato['colores'] for dato in pregunta5]
                valores5 = [dato['total'] for dato in pregunta5]

                pregunta6 = Encuesta.objects.values('met_pago').annotate(total=Count('met_pago'))
                etiquetas6 = [dato['met_pago'] for dato in pregunta6]
                valores6 = [dato['total'] for dato in pregunta6]

                pregunta7 = Encuesta.objects.values('dispositivo').annotate(total=Count('dispositivo'))
                etiquetas7 = [dato['dispositivo'] for dato in pregunta7]
                valores7 = [dato['total'] for dato in pregunta7]

                pregunta8 = Encuesta.objects.values('not_correo').annotate(total=Count('not_correo'))
                etiquetas8 = [dato['not_correo'] for dato in pregunta8]
                valores8 = [dato['total'] for dato in pregunta8]

                pregunta9 = Encuesta.objects.values('factores').annotate(total=Count('factores'))
                etiquetas9 = [dato['factores'] for dato in pregunta9]
                valores9 = [dato['total'] for dato in pregunta9]
                
                pregunta10 = Encuesta.objects.values('sug_mejoras').annotate(total=Count('sug_mejoras'))
                etiquetas10 = [dato['sug_mejoras'] for dato in pregunta10]
                valores10 = [dato['total'] for dato in pregunta10]

                return render(request, self.template_name,  {
                    'etiquetas1': etiquetas1,
                    'valores1': valores1,
                    'etiquetas2': etiquetas2,
                    'valores2': valores2,
                    'etiquetas3': etiquetas3,
                    'valores3': valores3,
                    'etiquetas4': etiquetas4,
                    'valores4': valores4,
                    'etiquetas5': etiquetas5,
                    'valores5': valores5,
                    'etiquetas6': etiquetas6,
                    'valores6': valores6,
                    'etiquetas7': etiquetas7,
                    'valores7': valores7,
                    'etiquetas8': etiquetas8,
                    'valores8': valores8,
                    'etiquetas9': etiquetas9,
                    'valores9': valores9,
                    'etiquetas10': etiquetas10,
                    'valores10': valores10,
                })

class PagoMP(LoginRequiredMixin, ListView):
    template_name="pago.html"
    
    def get(self, request):
        mp = mercadopago.SDK("APP_USR-7365618180421079-112515-ae2011dc2c3c35e29e0129628fcc313b-292126273")

        preference_data = {
            "items": [
                {
                    "id": "0001",
                    "title": "Tempra Gotas",
                    "quantity": 1,
                    "unit_price": 20,
                    "currency_id": "MXN"
                }
            ]
        }

        preference_response = mp.preference().create(preference_data)
        preference = preference_response["response"]

        return render(request, self.template_name, {'PREFERENCE_ID': preference['id']})

@login_required
def agregar_al_carrito(request, producto_id):
    producto = get_object_or_404(Producto, id_producto=producto_id)

    if request.method == 'POST':
        cantidad = int(request.POST.get('cantidad'))

        if cantidad > producto.cantidad_stock:
            sweetify.warning(request, f'Piezas insuficientes de {producto.nombre}. Solo hay {producto.cantidad_stock} en stock.')
            return redirect('carrito')

        if cantidad <= 0:
            sweetify.warning(request, title='Favor de revisar', text='Debe agregar por lo menos 1 pieza')
            return redirect('mederyfarma')
        else:
            carrito, created = Carrito.objects.get_or_create(id_usuario=request.user)

            detalle_carrito, created = Detalle_Carrito.objects.get_or_create(
                id_producto=producto,
                id_carrito=carrito,
            )

            detalle_carrito.cantidad += cantidad
            detalle_carrito.save()
            
            sweetify.success(request, 'Producto agregado al carrito')
            return redirect('carrito')

    return render(request, "mederyfarma.html")

@login_required
def realizar_compra(request):
    venta = Venta.objects.create(id_usuario=request.user)
    detalles_carrito = Detalle_Carrito.objects.filter(id_carrito__id_usuario=request.user)

    total = 0

    for detalle_carrito in detalles_carrito:
        cantidad = detalle_carrito.cantidad
        subtotal = detalle_carrito.id_producto.precio * cantidad
        total += subtotal

        Detalle_Venta.objects.create(id_venta=venta, id_producto=detalle_carrito.id_producto, cantidad=cantidad)

        detalle_carrito.id_producto.cantidad_stock -= cantidad
        detalle_carrito.id_producto.save()

        detalle_carrito.delete()

    ticket = Ticket.objects.create(id_venta=venta, total=total)
    sweetify.success(request, f'Compra realizada con éxito por un total de: ${ticket.total}')

    return redirect('detalle_compra', venta_id=venta.id_venta)

@login_required
def borrar_carrito(request):
    detalles_carrito = Detalle_Carrito.objects.filter(id_carrito__id_usuario=request.user)
    
    for detalle_carrito in detalles_carrito:
        detalle_carrito.delete()
        
    sweetify.success(request, 'Carrito eliminado con éxito.')
    return redirect('carrito')

@login_required
def disminuir_cantidad(request, id_detalle):
    detalle_carrito = get_object_or_404(Detalle_Carrito, id_detalle_carrito=id_detalle)

    if detalle_carrito.cantidad == 1:
        sweetify.warning(request, '¡Atención!', text='No puedes tener 0 piezas en tu carrito.')
    elif detalle_carrito.cantidad > 1:
        detalle_carrito.cantidad -= 1
        detalle_carrito.save()
        
    return redirect('carrito')

@login_required
def aumentar_cantidad(request, id_detalle):
    detalle_carrito = get_object_or_404(Detalle_Carrito, id_detalle_carrito=id_detalle)

    detalle_carrito.cantidad += 1
    detalle_carrito.save()

    return redirect('carrito')

@login_required
def eliminar_producto(request, id_detalle):
    detalle_carrito = get_object_or_404(Detalle_Carrito, id_detalle_carrito=id_detalle)
    detalle_carrito.delete()

    sweetify.success(request, 'Producto eliminado con éxito.')
    return redirect('carrito')