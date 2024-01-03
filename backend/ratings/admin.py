from django.contrib import admin
from .models import Rating

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ['user', 'lawyer', 'stars']
    list_filter = ['lawyer']
    search_fields = ['user__username', 'lawyer__firstname', 'lawyer__lastname']
