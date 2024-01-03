from django.db import models
from lawyers.models import Lawyer
from django.contrib.auth.models import User
from datetime import timedelta

class Appointment(models.Model):
    WAITING = 'waiting'
    APPROVED = 'approved'
    DISAPPROVED = 'disapproved'

    STATUS_CHOICES = [
        (WAITING, 'Waiting'),
        (APPROVED, 'Approved'),
        (DISAPPROVED, 'Disapproved'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lawyer = models.ForeignKey(Lawyer, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True, blank=True)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=WAITING)

    def __str__(self):
        return f"Appointment with {self.lawyer} at {self.start_time} ({self.status})"

    def save(self, *args, **kwargs):
        self.end_time = self.start_time + timedelta(minutes=30)
        super().save(*args, **kwargs)





