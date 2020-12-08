from django.contrib.auth import get_user_model
from django.db import models
from Restaurant.models import Foods
from User.models import User


class Comment(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, )
    food = models.ForeignKey(Foods, on_delete=models.CASCADE, blank=True, null=True, )
    date = models.DateTimeField(auto_now_add=True, blank=True)
