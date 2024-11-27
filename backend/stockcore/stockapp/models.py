from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Item_Product(models.Model):
    item_code = models.IntegerField(verbose_name="รหัสสินค้า")
    name = models.CharField(verbose_name="ชื่อสินค้า", max_length=255)
    brand_name = models.CharField(verbose_name="ยี่ห้อสินค้า", max_length=255)
    type_pro = models.CharField(verbose_name="ประเภทสินค้า", max_length=255)
    barcode = models.CharField(verbose_name="บาร์โค้ด", max_length=50, unique=True)
    is_lot_control = models.BooleanField(verbose_name="ควบคุมล็อต", default=True)
    quantity = models.IntegerField(verbose_name="จำนวนสินค้า")
    onhand = models.IntegerField(verbose_name="จำนวนคงเหลือ")
    unit_code = models.ForeignKey("Unit_Of_Measure", on_delete=models.CASCADE, verbose_name="รหัสหน่วยนับ")
    unit_price = models.FloatField(verbose_name="ราคาขายต่อหน่วย")

    def __str__(self):
        return f"{self.item_code}"

class Unit_Of_Measure(models.Model):
    unit_code = models.CharField(verbose_name="รหัสหน่วยนับ", max_length=255)
    unit_of_measure = models.CharField(verbose_name="ชื่อเรียกหน่วยนับ", max_length=255)

    def __str__(self):
        return f"{self.unit_code}"

class Store(models.Model):
    store_code = models.CharField(verbose_name="รหัสคลังสินค้า", max_length=100)
    store_name = models.CharField(verbose_name="ชื่อคลังสินค้า", max_length=255)

    def __str__(self):
        return f"{self.store_code}"

class Location(models.Model):
    loc_code = models.CharField(verbose_name="รหัสที่เก็บ", max_length=100)
    store_code = models.ForeignKey(Store, on_delete=models.CASCADE, verbose_name="รหัสคลังสินค้า")
    loc_name = models.CharField(verbose_name="ชื่อที่เก็บ", max_length=255)
    onhand = models.IntegerField(verbose_name="จำนวนคงเหลือ")

    def __str__(self):
        return f"{self.loc_code}"

class Stock(models.Model):
    item_code = models.ForeignKey(Item_Product, on_delete=models.CASCADE, verbose_name="รหัสสินค้า")
    store_code = models.ForeignKey(Store, on_delete=models.CASCADE, verbose_name="รหัสคลังค้า")
    loc_code = models.ForeignKey(Location, on_delete=models.CASCADE, verbose_name="รหัสที่เก็บ")
    lot_no = models.CharField(verbose_name="หมายเลขล็อต", max_length=100)
    onhand = models.IntegerField(verbose_name="จำนวนคงเหลือ")

class Lot(models.Model):
    lot_no = models.CharField(verbose_name="หมายเลขล็อต", max_length=100)
    lot_unit_cost = models.FloatField(verbose_name="ต้นทุน/หน่วยของล็อต")
    item_code = models.IntegerField(verbose_name="รหัสสินค้า")

    def __str__(self):
        return f"{self.lot_no}"

class EmpChoices(models.TextChoices):

    ADMIN = 'ADMIN', _('Admin')
    USER = 'USER', _('User')

class DeptChoices(models.TextChoices):

    IT = 'IT', _('IT')
    HR = 'HR', _('Hr')

class Employee(models.Model):
    emp_code = models.CharField(verbose_name="รหัสพนักงาน", max_length=50)
    first_name = models.CharField(verbose_name="ชื่อพนักงาน", max_length=50)
    last_name = models.CharField(verbose_name="นามสกุล", max_length=50)
    position = models.CharField(verbose_name="ตำแหน่ง", max_length=10, choices=EmpChoices.choices)
    department  =models.CharField(verbose_name="แผนก", max_length=10, choices=DeptChoices.choices)

    def __str__(self):
        return f"{self.emp_code}"

class TransactionChoices(models.TextChoices):

    RECEIVE = 'REC', _('Recieve')
    TRANSFER = 'TRAN', _('Transfer')
    ISSUE = 'ISSUE', _('Issue')
    BILLING = 'BILL', _('Billing')
    ADJUST = 'ADJ', _('Adjust')

class Transaction(models.Model):
    item_code = models.ForeignKey(Item_Product, on_delete=models.CASCADE, verbose_name="รหัสสินค้า")
    lot_no = models.ForeignKey("Lot", on_delete=models.CASCADE, verbose_name="หมายเลขล็อต")
    transaction_type = models.CharField(verbose_name="ประเภทการทำรายการ", max_length=5, choices=TransactionChoices.choices)
    transaction_date = models.DateField(verbose_name="วันที่ทำรายการ", auto_now=True)
    transaction_quantity = models.IntegerField(verbose_name="จำนวนที่ทำรายการ")
    cost = models.FloatField(verbose_name="ต้นทุนรวม")
    amount = models.FloatField(verbose_name="จำนวนเงิน")
    store_code = models.ForeignKey(Store, on_delete=models.CASCADE, verbose_name="รหัสคลังสินค้า", related_name="transaction_store")
    loc_code = models.ForeignKey(Location, on_delete=models.CASCADE, verbose_name="รหัสที่เก็บ", related_name="transaction_loc")
    tostore_code = models.ForeignKey(Store, on_delete=models.CASCADE, verbose_name="รหัสคลังสินค้าปลายทาง", related_name="transaction_tostore")
    toloc_code = models.ForeignKey(Location, on_delete=models.CASCADE, verbose_name="รหัสที่เก็บปลายทาง", related_name="transaction_toloc")
    enter_date = models.DateField(verbose_name="วันที่บันทึก", auto_now=True)
    emp_code = models.ForeignKey("Employee", on_delete=models.CASCADE, verbose_name="รหัสผู้บันทึก")



