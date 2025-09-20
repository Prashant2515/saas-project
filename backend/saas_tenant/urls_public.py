"""
URLs for the public schema (shared/global URLs)
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        'message': 'Welcome to SaaS Tenant API',
        'endpoints': {
            'admin': '/admin/',
            'auth': {
                'register': '/api/tenant/auth/register/',
                'login': '/api/tenant/auth/login/',
            },
            'clients': '/api/tenant/clients/',
            'accounts': '/api/account/accounts/',
            'profiles': '/api/account/profiles/',
        }
    })

urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    
    # Public API endpoints
    path('api/tenant/', include('tenant.urls')),
    path('api/account/', include('account.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
