from rest_framework import generics
from rest_framework.response import Response
from .models import Appointment
from .serializers import AppointmentSerializer
from lawyers.models import Lawyer

class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    def create(self, request, *args, **kwargs):
        user = request.user  
        lawyer_id = request.data.get('lawyer')  
        start_time = request.data.get('start_time')  
        description = request.data.get('description')
        appointment_data = {
            'user': user.id,
            'lawyer_id': lawyer_id,
            'start_time': start_time,
            'description': description,
        }
        serializer = self.get_serializer(data=appointment_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=201, headers=headers)

class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer



