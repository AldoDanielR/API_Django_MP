# Generated by Django 3.2.23 on 2023-12-18 22:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0019_detalle_venta_producto_ticket_venta'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(db_column='imagen', upload_to='./productos/'),
        ),
    ]
