# Generated by Django 5.1.3 on 2024-11-17 10:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stockapp', '0002_rename_item_item_product'),
    ]

    operations = [
        migrations.RenameField(
            model_name='unit_of_measure',
            old_name='unit_of_meature',
            new_name='unit_of_measure',
        ),
    ]
