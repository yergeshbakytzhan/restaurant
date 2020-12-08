from django.contrib.auth import get_user_model
from django.db import models
from Restaurant.models import Foods
from User.models import User


class BasketItems(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, )
    food = models.ForeignKey(Foods, on_delete=models.CASCADE, blank=True, null=True, )
    amount = models.IntegerField(default=1)

