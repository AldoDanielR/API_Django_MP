# Generated by Django 3.2.23 on 2024-01-03 02:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('API', '0058_auto_20240102_2052'),
    ]

    operations = [
        migrations.CreateModel(
            name='Detalle_Venta',
            fields=[
                ('id_detalle_venta', models.AutoField(db_column='id_detalle_venta', primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField(db_column='cantidad')),
                ('id_producto', models.ForeignKey(db_column='id_producto', on_delete=django.db.models.deletion.CASCADE, to='API.producto')),
            ],
            options={
                'db_table': 'detalle_venta',
            },
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id_venta', models.AutoField(db_column='id_venta', primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField(auto_now_add=True, db_column='fecha')),
                ('id_usuario', models.ForeignKey(db_column='id_usuario', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('productos', models.ManyToManyField(through='API.Detalle_Venta', to='API.Producto')),
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
        migrations.AddField(
            model_name='detalle_venta',
            name='id_venta',
            field=models.ForeignKey(db_column='id_venta', on_delete=django.db.models.deletion.CASCADE, to='API.venta'),
        ),
    ]