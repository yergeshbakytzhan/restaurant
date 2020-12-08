from django.contrib.auth import get_user_model
from django.db import models
import time

def upload_foods(instance, filename):
    lastDot = filename.rfind('.')
    extension = filename[lastDot:len(filename):1]
    return 'images/foods/%s-%s%s' % (instance.name, time.time(), extension)

class Category(models.Model):
    category = models.CharField(max_length=255)


class Foods(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=6000)
    price = models.CharField(max_length=250)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True, )
    img = models.FileField(upload_to = upload_foods,blank=True, null=True,)

class Spicies(models.Model):
    spicy = models.CharField(max_length=255)
    foods = models.ForeignKey(Foods, on_delete=models.CASCADE, blank=True, null=True,)

class Chefs(models.Model):
    name = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    description = models.CharField(max_length=5000)

class Rooms(models.Model):
    name = models.CharField(max_length=255)
    seats = models.CharField(max_length=255)
    description = models.CharField(max_length=5000)