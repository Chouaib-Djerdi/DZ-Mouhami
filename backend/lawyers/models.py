from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator



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

    WORKING_HOUR_CHOICES = [
        ('08:00', '08:00 - 10:00'),
        ('10:00', '10:00 - 12:00'),
        ('12:00', '12:00 - 14:00'),
        ('14:00', '14:00 - 16:00'),
        ('16:00', '16:00 - 18:00'),
    ]

    workingDays = models.CharField(
        max_length=50,
        choices=WORKING_DAY_CHOICES,
        blank=True
    )

    workingHours = models.CharField(
        max_length=50,
        choices=WORKING_HOUR_CHOICES,
        blank=True
    )
    subscription_type = models.CharField(max_length=50, choices=[("1_month", "1 Month"), ("3_months", "3 Months"), ("1_year", "1 Year")], blank=True, null=True)
    payment_proof = models.ImageField(upload_to='subscription_payment_proofs/', null=True, blank=True)
    approved = models.BooleanField(default=False)
    ratings = models.FloatField(default=0.0)
    

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
