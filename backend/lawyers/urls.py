from django.urls import path
from .views import LawyerRegisterView, LawyerLoginView, LawyerLogoutView, ApproveLawyerView, DeleteLawyerView, SearchView
urlpatterns = [
    path('register/', LawyerRegisterView.as_view(), name='lawyer-register'),
    path('login/', LawyerLoginView.as_view(), name='lawyer-login'),
    path('logout/', LawyerLogoutView.as_view(), name='lawyer-logout'),
    path('approve/', ApproveLawyerView.as_view(), name='approve-lawyer'),
    path('delete/', DeleteLawyerView.as_view(), name='delete-lawyer'),
    path('search/', SearchView.as_view(), name='advanced-search'),
]