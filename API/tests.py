from django.test import TestCase
from .models import *

# Create your tests here.

class EncuestaTests(TestCase):
    def test_crear_instancia(self):
        # Crea una instancia del modelo y realiza pruebas
        instancia = Encuesta(frecuencia="Diariamente",
                             c_navegacion="Sencillo",
                             tipo_producto="Ropa y accesorios",
                             diseño="Tradicional",
                             colores="Opción1",
                             met_pago="Tarjeta de credito",
                             dispositivo="Movil",
                             not_correo="Si",
                             factores="Buen precio",
                             sug_mejoras="Chatbot",)
        self.assertEqual(instancia.frecuencia, "Diariamente")
        self.assertEqual(instancia.c_navegacion, "Sencillo")
        self.assertEqual(instancia.tipo_producto, "Ropa y accesorios")
        self.assertEqual(instancia.diseño, "Tradicional")
        self.assertEqual(instancia.colores, "Opción1")
        self.assertEqual(instancia.met_pago, "Tarjeta de credito")
        self.assertEqual(instancia.dispositivo, "Movil")
        self.assertEqual(instancia.not_correo, "Si")
        self.assertEqual(instancia.factores, "Buen precio")
        self.assertEqual(instancia.sug_mejoras, "Chatbot")