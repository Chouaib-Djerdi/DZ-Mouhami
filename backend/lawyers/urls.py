from django.urls import path
from .views import LawyerRegisterView, LawyerLoginView, LawyerLogoutView, ApproveLawyerView, DeleteLawyerView, SearchView, LawyerListCreateView, LawyerDetailView
urlpatterns = [
    path('register/', LawyerRegisterView.as_view(), name='lawyer-register'),
    path('login/', LawyerLoginView.as_view(), name='lawyer-login'),
    path('logout/', LawyerLogoutView.as_view(), name='lawyer-logout'),
    path('approve/', ApproveLawyerView.as_view(), name='approve-lawyer'),
    path('delete/', DeleteLawyerView.as_view(), name='delete-lawyer'),
    path('search/', SearchView.as_view(), name='advanced-search'),
    path('', LawyerListCreateView.as_view(), name='lawyer-list-create'),
    path('<int:pk>', LawyerDetailView.as_view(), name='lawyer-detail'),
]