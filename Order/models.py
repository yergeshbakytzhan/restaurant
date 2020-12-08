from django.contrib.auth import get_user_model
from django.db import models
from Restaurant.models import Foods

User = get_user_model()


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, )
    date = models.DateTimeField(auto_now_add=True, blank=True)
    status = models.IntegerField(default=1)


class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True, null=True, related_name='items')
    foods = models.ForeignKey(Foods, on_delete=models.CASCADE, blank=True, null=True, )
    amount = models.IntegerField(default=1)
