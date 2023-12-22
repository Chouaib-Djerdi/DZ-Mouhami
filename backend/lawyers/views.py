from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from .models import Lawyer
from .serializers import LawyerSerializer

class LawyerRegisterView(generics.CreateAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer

    def perform_create(self, serializer):

        validated_data = serializer.validated_data
        
        additional_data = self.request.data.get('additional_data')
        
        serializer.validated_data['approved'] = False


        super(LawyerRegisterView, self).perform_create(serializer)


class LawyerLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        if email and password:
            # Authenticate the user
            user = authenticate(request, email=email, password=password)

            if user:
                # Login the user
                login(request, user)

                # Generate and return an authentication token
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

class LawyerLogoutView(APIView):
    def post(self, request, *args, **kwargs):
        # Logout the user
        logout(request)
        return Response({'detail': 'Successfully logged out'}, status=status.HTTP_200_OK)

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


class DeleteLawyerView(APIView):
    def post(self, request, *args, **kwargs):
        lawyer_id = request.data.get('lawyer_id')
        try:
            lawyer = Lawyer.objects.get(pk=lawyer_id)
        except Lawyer.DoesNotExist:
            return Response({'error': 'Lawyer not found'}, status=status.HTTP_404_NOT_FOUND)

        lawyer.delete()

        return Response({'detail': 'Lawyer deleted successfully'}, status=status.HTTP_200_OK)
