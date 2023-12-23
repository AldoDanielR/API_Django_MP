# Generated by Django 3.2.23 on 2023-12-19 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0028_auto_20231219_1410'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id_producto', models.IntegerField(db_column='id_producto', primary_key=True, serialize=False)),
                ('nombre', models.CharField(db_column='nombre', max_length=100)),
                ('precio', models.DecimalField(db_column='precio', decimal_places=2, max_digits=10)),
                ('cantidad_stock', models.IntegerField(db_column='cantidad_stock')),
                ('imagen', models.ImageField(db_column='imagen', upload_to='static/productos/')),
            ],
            options={
                'db_table': 'producto',
            },
        ),
    ]
