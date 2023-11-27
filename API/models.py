from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Encuesta(models.Model):
    id_respuesta = models.IntegerField(primary_key=True, db_column='idRespuesta')
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