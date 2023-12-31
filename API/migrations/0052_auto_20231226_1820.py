# Generated by Django 3.2.23 on 2023-12-27 00:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0051_alter_detalle_carrito_cantidad'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detalle_carrito',
            name='id_carrito',
        ),
        migrations.RemoveField(
            model_name='detalle_carrito',
            name='id_producto',
        ),
        migrations.RemoveField(
            model_name='detalle_venta',
            name='id_producto',
        ),
        migrations.RemoveField(
            model_name='detalle_venta',
            name='id_venta',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='id_venta',
        ),
        migrations.RemoveField(
            model_name='venta',
            name='id_usuario',
        ),
        migrations.RemoveField(
            model_name='venta',
            name='productos',
        ),
        migrations.DeleteModel(
            name='Carrito',
        ),
        migrations.DeleteModel(
            name='Detalle_Carrito',
        ),
        migrations.DeleteModel(
            name='Detalle_Venta',
        ),
        migrations.DeleteModel(
            name='Ticket',
        ),
        migrations.DeleteModel(
            name='Venta',
        ),
    ]
