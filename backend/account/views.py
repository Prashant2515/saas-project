from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile, AccountData
from .serializers import UserProfileSerializer, AccountDataSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    # Add the missing queryset attribute
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Filter to current user's profile
        return UserProfile.objects.filter(user=self.request.user)

class AccountDataViewSet(viewsets.ModelViewSet):
    # Add the missing queryset attribute
    queryset = AccountData.objects.all()
    serializer_class = AccountDataSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # You can customize this later for tenant-specific filtering
        return AccountData.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
