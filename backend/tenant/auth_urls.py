from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
# from . import views

urlpatterns = [
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Add authentication URLs here
    # path('login/', views.CustomLoginView.as_view(), name='login'),
    # path('register/', views.RegisterView.as_view(), name='register'),
]
