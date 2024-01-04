from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from .models import Lawyer
from .serializers import LawyerSerializer
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from django.db.models import Q


class LawyerRegisterView(generics.CreateAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer

    def perform_create(self, serializer):
        validated_data = serializer.validated_data
        additional_data = self.request.data.get('additional_data')
        subscription_type = self.request.data.get('plan')
        payment_proof = self.request.data.get('payment_proof')
        email = validated_data.get('emailAddress')

        if not Lawyer.objects.filter(email=email).exists():
            super(LawyerRegisterView, self).perform_create(serializer)
            lawyer_instance = serializer.instance

            if additional_data:
                selected_working_days = additional_data.get('workingDays', [])
                working_hours = additional_data.get('workingHours', [])

                lawyer_instance.workingDays.set(selected_working_days)
                lawyer_instance.workingHours.set(working_hours)

            # Save subscription details
            lawyer_instance.subscription_type = subscription_type
            lawyer_instance.payment_proof = payment_proof
            lawyer_instance.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            raise serializers.ValidationError("Email already exists. Choose a different email.")

class LawyerLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('emailAddress')
        password = request.data.get('password')

        if email and password:
            user = authenticate(request, email=email, password=password)

            if user:
                login(request, user)

                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

class LawyerLogoutView(APIView):
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'detail': 'Successfully logged out'}, status=status.HTTP_200_OK)


@permission_classes([IsAdminUser])
class ApproveLawyerView(APIView):
    def post(self, request, *args, **kwargs):
        lawyer_id = request.data.get('lawyer_id')
        try:
            lawyer = Lawyer.objects.get(pk=lawyer_id)
        except Lawyer.DoesNotExist:
            return Response({'error': 'Lawyer not found'}, status=status.HTTP_404_NOT_FOUND)

        lawyer.approved = True
        lawyer.save()

        return Response({'detail': 'Lawyer approved successfully'}, status=status.HTTP_200_OK)

@permission_classes([IsAdminUser])
class DeleteLawyerView(APIView):
    def post(self, request, *args, **kwargs):
        lawyer_id = request.data.get('lawyer_id')
        try:
            lawyer = Lawyer.objects.get(pk=lawyer_id)
        except Lawyer.DoesNotExist:
            return Response({'error': 'Lawyer not found'}, status=status.HTTP_404_NOT_FOUND)

        lawyer.delete()

        return Response({'detail': 'Lawyer deleted successfully'}, status=status.HTTP_200_OK)

class SearchView(generics.ListAPIView):
    serializer_class = LawyerSerializer

    def get_queryset(self):
        specialty = self.request.query_params.get('specialty', '')
        location = self.request.query_params.get('location', '')
        name = self.request.query_params.get('name', '')
        queryset = Lawyer.objects.all()

        if specialty:
            queryset = queryset.filter(specialities__icontains=specialty)

        if location:
            queryset = queryset.filter(address__icontains=location)

        if name:
            queryset = queryset.filter(Q(firstname__icontains=name) | Q(lastname__icontains=name))

        return queryset

class LawyerListCreateView(generics.ListCreateAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer

class LawyerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer



