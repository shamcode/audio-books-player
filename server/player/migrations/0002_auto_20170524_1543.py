# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-24 15:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookpart',
            name='file',
            field=models.FileField(upload_to='books'),
        ),
    ]
