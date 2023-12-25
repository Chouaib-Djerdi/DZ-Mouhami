from django.urls import path
from .views import UserLogoutView

urlpatterns = [
    path('logout/', UserLogoutView.as_view(), name='api_logout'),
]
