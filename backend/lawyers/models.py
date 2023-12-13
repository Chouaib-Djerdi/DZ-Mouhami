from django.db import models

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
    workingHours = models.TextField()
    workingDays = models.TextField()
    approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
