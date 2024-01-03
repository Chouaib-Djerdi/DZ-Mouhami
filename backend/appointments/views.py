from rest_framework import generics, status
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
        
        existing_approved_appointment = Appointment.objects.filter(
            start_time=start_time,
            status=Appointment.APPROVED
        )

        if existing_approved_appointment:
            return Response({'detail': 'This time slot is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        response = super().create(request, *args, **kwargs)

        if response.status_code == status.HTTP_201_CREATED:
            response.data['message'] = 'Appointment created successfully.'

        return response

class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        status_to_set = request.data.get('status')

        if status_to_set == Appointment.APPROVED:
            overlapping_appointments = Appointment.objects.filter(
                lawyer=instance.lawyer,
                start_time=instance.start_time,
                status=Appointment.WAITING 
            )
            overlapping_appointments.exclude(pk=instance.pk).update(status=Appointment.DISAPPROVED)

        instance.status = status_to_set
        instance.save()

        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)




