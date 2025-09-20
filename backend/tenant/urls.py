from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClientViewSet, register, login

# Create a router for ViewSets
router = DefaultRouter()
router.register(r'clients', ClientViewSet)

urlpatterns = [
    # ViewSet routes (automatic CRUD)
    path('', include(router.urls)),
    
    # Authentication endpoints
    path('auth/register/', register, name='register'),
    path('auth/login/', login, name='login'),
]
