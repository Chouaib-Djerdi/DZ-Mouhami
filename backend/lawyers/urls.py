from django.urls import path
from .views import LawyerRegisterView, LawyerLoginView, LawyerLogoutView

urlpatterns = [
    path('register/', LawyerRegisterView.as_view(), name='lawyer-register'),
    path('login/', LawyerLoginView.as_view(), name='lawyer-login'),
    path('logout/', LawyerLogoutView.as_view(), name='lawyer-logout'),
]