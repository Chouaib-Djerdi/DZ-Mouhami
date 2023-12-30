from django.contrib import admin
from .models import Appointment

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'lawyer', 'start_time', 'end_time', 'description', 'status')
    list_filter = ('status', 'lawyer')
    search_fields = ('user__username', 'lawyer__firstname', 'lawyer__lastname', 'start_time', 'status')

admin.site.register(Appointment, AppointmentAdmin)



