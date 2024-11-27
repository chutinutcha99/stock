from rest_framework import routers
from stockapp.viewsets import *
router = routers.SimpleRouter()

router.register(r'stockapp/items', ItemProductViewSet, basename="itemproduct")
router.register(r'stockapp/units', UnitViewSet, basename="unit")
router.register(r'stockapp/stores', StoreViewSet, basename="store")
router.register(r'stockapp/locations', LocationViewSet, basename="location")
router.register(r'stockapp/stocks', StockViewSet, basename="stock")
router.register(r'stockapp/lots', LotViewSet, basename="lot")
router.register(r'stockapp/emps', EmpViewSet, basename="emp")
router.register(r'stockapp/transactions', TransactionViewSet, basename="transaction")

urlpatterns = router.urls