from rest_framework import serializers
from .models import Lawyer

class LawyerSerializer(serializers.ModelSerializer):
    workingDays = serializers.ListField(
        child=serializers.CharField(max_length=50, allow_blank=True),
        allow_empty=True
    )
    
    workingHours = serializers.ListField(
        child=serializers.CharField(max_length=50, allow_blank=True),
        allow_empty=True
    )
    class Meta:
        model = Lawyer
        fields = '__all__'
        