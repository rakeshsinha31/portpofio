# portfolio/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ContactViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
