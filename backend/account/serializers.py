from rest_framework import serializers
from .models import UserProfile, AccountData
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'phone', 'address', 'created_at', 'updated_at']

class AccountDataSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    
    class Meta:
        model = AccountData
        fields = ['id', 'name', 'email', 'phone', 'description', 
                 'created_by', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']
