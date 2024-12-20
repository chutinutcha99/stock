# Generated by Django 5.1.3 on 2024-11-15 14:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emp_code', models.CharField(max_length=50, verbose_name='รหัสพนักงาน')),
                ('first_name', models.CharField(max_length=50, verbose_name='ชื่อพนักงาน')),
                ('last_name', models.CharField(max_length=50, verbose_name='นามสกุล')),
                ('position', models.CharField(choices=[('ADMIN', 'Admin'), ('USER', 'User')], max_length=10, verbose_name='ตำแหน่ง')),
                ('department', models.CharField(choices=[('IT', 'IT'), ('HR', 'Hr')], max_length=10, verbose_name='แผนก')),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_code', models.IntegerField(verbose_name='รหัสสินค้า')),
                ('name', models.CharField(max_length=255, verbose_name='ชื่อสินค้า')),
                ('brand_name', models.CharField(max_length=255, verbose_name='ยี่ห้อสินค้า')),
                ('type_pro', models.CharField(max_length=255, verbose_name='ประเภทสินค้า')),
                ('barcode', models.CharField(max_length=50, unique=True, verbose_name='บาร์โค้ด')),
                ('is_lot_control', models.BooleanField(default=True, verbose_name='ควบคุมล็อต')),
                ('quantity', models.IntegerField(verbose_name='จำนวนสินค้า')),
                ('onhand', models.IntegerField(verbose_name='จำนวนคงเหลือ')),
                ('unit_price', models.FloatField(verbose_name='ราคาขายต่อหน่วย')),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('loc_code', models.CharField(max_length=100, verbose_name='รหัสที่เก็บ')),
                ('loc_name', models.CharField(max_length=255, verbose_name='ชื่อที่เก็บ')),
                ('onhand', models.IntegerField(verbose_name='จำนวนคงเหลือ')),
            ],
        ),
        migrations.CreateModel(
            name='Lot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lot_no', models.CharField(max_length=100, verbose_name='หมายเลขล็อต')),
                ('lot_unit_cost', models.FloatField(verbose_name='ต้นทุน/หน่วยของล็อต')),
                ('item_code', models.IntegerField(verbose_name='รหัสสินค้า')),
            ],
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('store_code', models.CharField(max_length=100, verbose_name='รหัสคลังสินค้า')),
                ('store_name', models.CharField(max_length=255, verbose_name='ชื่อคลังสินค้า')),
            ],
        ),
        migrations.CreateModel(
            name='Unit_Of_Measure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unit_code', models.CharField(max_length=255, verbose_name='รหัสหน่วยนับ')),
                ('unit_of_meature', models.CharField(max_length=255, verbose_name='ชื่อเรียกหน่วยนับ')),
            ],
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lot_no', models.CharField(max_length=100, verbose_name='หมายเลขล็อต')),
                ('onhand', models.IntegerField(verbose_name='จำนวนคงเหลือ')),
                ('item_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.item', verbose_name='รหัสสินค้า')),
                ('loc_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.location', verbose_name='รหัสที่เก็บ')),
                ('store_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.store', verbose_name='รหัสคลังค้า')),
            ],
        ),
        migrations.AddField(
            model_name='location',
            name='store_code',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.store', verbose_name='รหัสคลังสินค้า'),
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transaction_type', models.CharField(choices=[('REC', 'Recieve'), ('TRAN', 'Transfer'), ('ISSUE', 'Issue'), ('BILL', 'Billing'), ('ADJ', 'Adjust')], max_length=5, verbose_name='ประเภทการทำรายการ')),
                ('transaction_date', models.DateTimeField(auto_now=True, verbose_name='วันที่ทำรายการ')),
                ('transaction_quantity', models.IntegerField(verbose_name='จำนวนที่ทำรายการ')),
                ('cost', models.FloatField(verbose_name='ต้นทุนรวม')),
                ('amount', models.FloatField(verbose_name='จำนวนเงิน')),
                ('enter_date', models.DateTimeField(auto_now=True, verbose_name='วันที่บันทึก')),
                ('emp_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.employee', verbose_name='รหัสผู้บันทึก')),
                ('item_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.item', verbose_name='รหัสสินค้า')),
                ('loc_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction_loc', to='stockapp.location', verbose_name='รหัสที่เก็บ')),
                ('lot_no', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.lot', verbose_name='หมายเลขล็อต')),
                ('store_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction_store', to='stockapp.store', verbose_name='รหัสคลังสินค้า')),
                ('toloc_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction_toloc', to='stockapp.location', verbose_name='รหัสที่เก็บปลายทาง')),
                ('tostore_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction_tostore', to='stockapp.store', verbose_name='รหัสคลังสินค้าปลายทาง')),
            ],
        ),
        migrations.AddField(
            model_name='item',
            name='unit_code',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stockapp.unit_of_measure', verbose_name='รหัสหน่วยนับ'),
        ),
    ]
