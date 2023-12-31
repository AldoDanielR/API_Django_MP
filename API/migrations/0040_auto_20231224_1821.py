# Generated by Django 3.2.23 on 2023-12-25 00:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('API', '0039_auto_20231224_1821'),
    ]

    operations = [
        migrations.CreateModel(
            name='Carrito',
            fields=[
                ('id_carrito', models.AutoField(db_column='id_carrito', primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'carrito',
            },
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id_venta', models.AutoField(db_column='id_venta', primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField(auto_now_add=True, db_column='fecha')),
                ('id_carrito', models.OneToOneField(db_column='id_carrito', on_delete=django.db.models.deletion.CASCADE, to='API.carrito')),
            ],
            options={
                'db_table': 'venta',
            },
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id_ticket', models.AutoField(db_column='id_ticket', primary_key=True, serialize=False)),
                ('total', models.DecimalField(db_column='total', decimal_places=2, max_digits=10)),
                ('id_venta', models.OneToOneField(db_column='id_venta', on_delete=django.db.models.deletion.CASCADE, to='API.venta')),
            ],
            options={
                'db_table': 'ticket',
            },
        ),
        migrations.CreateModel(
            name='Detalle_Carrito',
            fields=[
                ('id_detalle_carrito', models.AutoField(db_column='id_detalle_carrito', primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField(db_column='cantidad')),
                ('id_carrito', models.ForeignKey(db_column='id_carrito', on_delete=django.db.models.deletion.CASCADE, to='API.carrito')),
                ('id_producto', models.ForeignKey(db_column='id_producto', on_delete=django.db.models.deletion.CASCADE, to='API.producto')),
            ],
            options={
                'db_table': 'detalle_carrito',
            },
        ),
        migrations.AddField(
            model_name='carrito',
            name='productos',
            field=models.ManyToManyField(through='API.Detalle_Carrito', to='API.Producto'),
        ),
        migrations.AddField(
            model_name='carrito',
            name='usuario_id',
            field=models.ForeignKey(db_column='usuario_id', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
