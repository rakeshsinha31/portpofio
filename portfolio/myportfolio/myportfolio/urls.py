from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),  # Ensure 'yourapp' is replaced with your Django app name
]
