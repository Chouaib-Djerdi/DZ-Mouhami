from django.db import models
from lawyers.models import Lawyer
from django.db.models import Avg


class Rating(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    lawyer = models.ForeignKey(Lawyer, on_delete=models.CASCADE)
    stars = models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.update_lawyer_average_rating()

    def update_lawyer_average_rating(self):
        ratings = Rating.objects.filter(lawyer=self.lawyer)
        average_rating = ratings.aggregate(Avg('stars'))['stars__avg']
        self.lawyer.ratings = average_rating
        self.lawyer.save()

    def __str__(self):
        return f"{self.user.username} rated {self.lawyer.firstname} {self.lawyer.lastname} {self.stars} stars"

