# Generated by Django 3.2.23 on 2023-12-19 22:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0035_auto_20231219_1630'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ticket',
            name='id_venta',
        ),
        migrations.RemoveField(
            model_name='venta',
            name='productos',
        ),
        migrations.RemoveField(
            model_name='venta',
            name='usuario_id',
        ),
        migrations.DeleteModel(
            name='Detalle_Venta',
        ),
        migrations.DeleteModel(
            name='Producto',
        ),
        migrations.DeleteModel(
            name='Ticket',
        ),
        migrations.DeleteModel(
            name='Venta',
        ),
    ]
