from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Encuesta(models.Model):
    id_respuesta = models.IntegerField(primary_key=True, db_column='id_respuesta')
    frecuencia = models.CharField(max_length=100, db_column='frecuencia')
    c_navegacion = models.CharField(max_length=200, db_column='c_navegacion')
    tipo_producto = models.CharField(max_length=100, db_column='tipo_producto')
    diseño = models.CharField(max_length=100, db_column='diseño')
    colores = models.CharField(max_length=100, db_column='colores')
    met_pago = models.CharField(max_length=100, db_column='met_pago')
    dispositivo = models.CharField(max_length=100, db_column='dispositivo')
    not_correo = models.CharField(max_length=100, db_column='not_correo')
    factores = models.CharField(max_length=100, db_column='factores')
    sug_mejoras = models.CharField(max_length=255, db_column='sug_mejoras')
    class Meta:
        db_table = 'encuesta'

class Producto(models.Model):
    id_producto = models.BigIntegerField(primary_key=True, db_column='id_producto')
    nombre = models.CharField(max_length=100, db_column='nombre')
    sustancia = models.CharField(max_length=255, db_column='sustancia')
    indicacion = models.CharField(max_length=255, db_column='indicacion')
    laboratorio = models.CharField(max_length=100, db_column='laboratorio')
    precio = models.DecimalField(max_digits=10, decimal_places=2, db_column='precio')
    cantidad_stock = models.IntegerField(db_column='cantidad_stock')
    imagen = models.ImageField(upload_to='static/productos/', db_column='imagen')
    class Meta:
        db_table = 'producto'
        
class Carrito(models.Model):
    id_carrito = models.AutoField(primary_key=True, db_column='id_carrito')
    id_usuario = models.ForeignKey(User, on_delete=models.CASCADE, db_column='id_usuario')
    
    def __str__(self):
        return f"{self.id_usuario.username}"

    class Meta:
        db_table = 'carrito'
        
class Detalle_Carrito(models.Model):
    id_detalle_carrito = models.AutoField(primary_key=True, db_column='id_detalle_carrito')
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE, db_column='id_producto')
    cantidad = models.IntegerField(default=0, db_column='cantidad')
    id_carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE, db_column='id_carrito')
    
    def __str__(self):
        return f"{self.id_producto.nombre} - {self.cantidad}"

    class Meta:
        db_table = 'detalle_carrito'
        
class Venta(models.Model):
    id_venta = models.AutoField(primary_key=True, db_column='id_venta')
    fecha = models.DateTimeField(auto_now_add=True, db_column='fecha')
    productos = models.ManyToManyField(Producto, through='Detalle_Venta')
    id_usuario = models.ForeignKey(User, on_delete=models.CASCADE, db_column='id_usuario')
    
    def __str__(self):
        return f"Compra {self.id} - Usuario: {self.id_usuario.username}"
    
    class Meta:
        db_table = 'venta'
        
class Detalle_Venta(models.Model):
    id_detalle_venta = models.AutoField(primary_key=True, db_column='id_detalle_venta')
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE, db_column='id_producto')
    cantidad = models.IntegerField(db_column='cantidad')
    id_venta = models.ForeignKey(Venta, on_delete=models.CASCADE, db_column='id_venta')
    class Meta:
        db_table = 'detalle_venta'

class Ticket(models.Model):
    id_ticket = models.AutoField(primary_key=True, db_column='id_ticket')
    total = models.DecimalField(max_digits=10, decimal_places=2, db_column='total')
    id_venta = models.OneToOneField(Venta, on_delete=models.CASCADE, db_column='id_venta')
    class Meta:
        db_table = 'ticket'

