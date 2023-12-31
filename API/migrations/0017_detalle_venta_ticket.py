# Generated by Django 3.2.23 on 2023-12-18 21:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0016_producto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id_ticket', models.IntegerField(db_column='id_ticket', primary_key=True, serialize=False)),
                ('total', models.DecimalField(db_column='total', decimal_places=2, max_digits=10)),
                ('id_venta', models.ForeignKey(db_column='id_venta', default=1, on_delete=django.db.models.deletion.CASCADE, to='API.venta')),
            ],
            options={
                'db_table': 'ticket',
            },
        ),
        migrations.CreateModel(
            name='Detalle_Venta',
            fields=[
                ('id_detalle_venta', models.IntegerField(db_column='id_detalle_venta', primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField(db_column='cantidad')),
                ('id_producto', models.ForeignKey(db_column='id_producto', default=1, on_delete=django.db.models.deletion.CASCADE, to='API.producto')),
                ('id_venta', models.ForeignKey(db_column='id_venta', default=1, on_delete=django.db.models.deletion.CASCADE, to='API.venta')),
            ],
            options={
                'db_table': 'detalle_venta',
            },
        ),
    ]
