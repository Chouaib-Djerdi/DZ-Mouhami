from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.postgres.fields import ArrayField

class Lawyer(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    profilePicture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    address = models.CharField(max_length=255)
    phoneNumber = models.CharField(max_length=12)
    socialMediaLink = models.URLField()
    email = models.EmailField(unique=True)
    description = models.TextField()
    personalWebsiteLink = models.URLField(null=True, blank=True)
    mapsPosition = models.CharField(max_length=255)
    subscriptionID = models.IntegerField()
    specialities = models.TextField()

    WORKING_DAY_CHOICES = [
        ('lundi', 'Lundi'),
        ('mardi', 'Mardi'),
        ('mercredi', 'Mercredi'),
        ('jeudi', 'Jeudi'),
        ('vendredi', 'Vendredi'),
        ('samedi', 'Samedi'),
        ('dimanche', 'Dimanche'),
    ]

    workingDays = ArrayField(
        models.CharField(max_length=10, choices=WORKING_DAY_CHOICES),
        size=7,
    )
    workingHours = models.TimeField(
        help_text='Working hours (24-hour format) starting at 8:00 a.m and end at 06:00 p.m',
        validators=[
            MinValueValidator(limit_value='08:00:00'),
            MaxValueValidator(limit_value='18:00:00')
        ]
    )
    approved = models.BooleanField(default=False)
    availability = models.BooleanField(default=True)

    def update_availability(self, start_time, end_time, available):
        self.availability = available
        self.save()

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
