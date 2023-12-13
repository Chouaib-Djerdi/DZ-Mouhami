from django.contrib import admin
from .models import Lawyer

@admin.register(Lawyer)
class LawyerAdmin(admin.ModelAdmin):
    list_display = ('id', 'firstname', 'lastname', 'email', 'phoneNumber', 'subscriptionID')
    search_fields = ('firstname', 'lastname', 'email', 'phoneNumber')

    class Meta:
        model = Lawyer

