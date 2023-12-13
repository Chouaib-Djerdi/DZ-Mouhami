from rest_framework import serializers
from .models import Lawyer

class LawyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lawyer
        fields = '__all__'