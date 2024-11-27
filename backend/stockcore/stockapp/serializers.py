from rest_framework import serializers
from stockapp.models import *

class ItemSerializer(serializers.ModelSerializer):

    class Meta:

        model = Item_Product
        fields = ['item_code','name', 'brand_name', 'type_pro', 
                  'barcode', 'is_lot_control', 'quantity', 'onhand', 'unit_code', 'unit_price']       

class UnitSerializer(serializers.ModelSerializer):

    class Meta:

        model = Unit_Of_Measure
        fields = ['unit_code', 'unit_of_measure']

class StoreSerializer(serializers.ModelSerializer):

    class Meta:

        model = Store
        fields = ['store_code', 'store_name']

class LocationSerializer(serializers.ModelSerializer):

    class Meta:

        model = Location
        fields = ['loc_code', 'store_code', 'loc_name','onhand']

class StockSerializer(serializers.ModelSerializer):

    class Meta:

        model = Stock
        fields = ['item_code', 'store_code', 'loc_code', 'lot_no', 'onhand']

class LotSerializer(serializers.ModelSerializer):

    class Meta:

        model = Lot
        fields = ['lot_no', 'lot_unit_cost', 'item_code']

class EmpSerializer(serializers.ModelSerializer):

    class Meta:

        model = Employee
        fields = ['emp_code', 'first_name', 'last_name', 'position', 'department']

class TransactionSerializer(serializers.ModelSerializer):

    class Meta:

        model = Transaction
        fields = ['item_code', 'lot_no', 'transaction_type', 'transaction_date',
                    'transaction_quantity', 'cost', 'amount', 'store_code', 
                    'loc_code', 'tostore_code', 'toloc_code', 'enter_date', 'emp_code']
