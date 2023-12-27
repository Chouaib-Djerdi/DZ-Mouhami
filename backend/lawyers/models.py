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

    workingDays = models.CharField(
        max_length=50,
        choices=WORKING_DAY_CHOICES,
        help_text='Select working days',
        blank=True
    )

    workingHours = models.PositiveIntegerField(
        help_text='Number of hours the lawyer works in a day starting at 8:00 to 16:00 (without the hour of lunch)',
        validators=[
            MinValueValidator(limit_value=1),
            MaxValueValidator(limit_value=24)
        ]
    )
    approved = models.BooleanField(default=False)
    ratings = models.FloatField(default=0.0)
    

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
