# Generated by Django 3.2.23 on 2023-12-18 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0013_delete_customuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='encuesta',
            name='id_respuesta',
            field=models.IntegerField(db_column='id_respuesta', primary_key=True, serialize=False),
        ),
    ]
