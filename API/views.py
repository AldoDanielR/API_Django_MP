from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.

from django.views.generic.list import ListView
from rest_framework.views import APIView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView,UpdateView,DeleteView,FormView
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse_lazy
from django.contrib import messages
from django.core.mail import send_mail
from django.http import HttpResponseRedirect

from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate, login
from django.db.models import Count
from .models import Encuesta, Producto
from random import sample
from django.conf import settings
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
    template_name = "MederyFarma Online.html"
    model = Producto
    context_object_name = 'productos'

    def get(self, request):
        username = request.user.username
        query = request.GET.get('q', '')
        if query:
            productos = Producto.objects.filter(nombre__icontains=query) | Producto.objects.filter(sustancia__icontains=query)
        else:
            all_productos = Producto.objects.all()
            productos = sample(list(all_productos), min(15, len(all_productos)))

        query = ''

        context = {'username': username, 'productos': productos, 'query': query}
        return render(request, self.template_name, context)
    
class Detalle_Producto(LoginRequiredMixin, ListView):
    template_name = "detalle_producto.html"

    def get(self, request, producto_id):
        username = request.user.username
        producto = get_object_or_404(Producto, id_producto=producto_id)

        productos_relacionados = Producto.objects.filter(sustancia=producto.sustancia).exclude(id_producto=producto.id_producto).order_by('?')[:3]

        context = {'username': username, 'producto': producto, 'productos': productos_relacionados}
        return render(request, self.template_name, context)
    
class Carrito(LoginRequiredMixin, ListView):
    template_name="Carrito.html"
    
    def get(self, request):
        return render(request,self.template_name)

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