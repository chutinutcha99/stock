# Generated by Django 5.1.3 on 2024-11-19 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stockapp', '0004_alter_transaction_enter_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='transaction_date',
            field=models.DateField(auto_now=True, verbose_name='วันที่ทำรายการ'),
        ),
    ]
