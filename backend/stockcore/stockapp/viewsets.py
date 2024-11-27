from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from stockapp.models import *

from stockapp.serializers import *


class ItemProductViewSet(viewsets.ModelViewSet):
    queryset = Item_Product.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [AllowAny]

class UnitViewSet(viewsets.ModelViewSet):
    queryset = Unit_Of_Measure.objects.all()
    serializer_class = UnitSerializer
    permission_classes = [AllowAny]

class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    permission_classes = [AllowAny]

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [AllowAny]

class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permission_classes = [AllowAny]

class LotViewSet(viewsets.ModelViewSet):
    queryset = Lot.objects.all()
    serializer_class = LotSerializer
    permission_classes = [AllowAny]

class EmpViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmpSerializer
    permission_classes = [AllowAny]

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [AllowAny]