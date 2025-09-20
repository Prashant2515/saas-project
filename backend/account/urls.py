from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, AccountDataViewSet

# Create a router for ViewSets
router = DefaultRouter()
router.register(r'profiles', UserProfileViewSet)  # Remove basename
router.register(r'accounts', AccountDataViewSet)  # Remove basename

urlpatterns = [
    path('', include(router.urls)),
]
