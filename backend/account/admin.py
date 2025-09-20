from django.contrib import admin
from .models import UserProfile, AccountData

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone', 'created_at']
    list_filter = ['created_at']
    search_fields = ['user__username', 'user__email', 'phone']

@admin.register(AccountData)
class AccountDataAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_by', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'email']
    readonly_fields = ['created_at', 'updated_at']
