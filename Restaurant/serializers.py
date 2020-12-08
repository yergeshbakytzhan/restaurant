from rest_framework import serializers
from Restaurant.models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'category')


class FoodsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Foods
        fields = ('id', 'name', 'description', 'price', 'category', 'img')

class SpicySerializer(serializers.ModelSerializer):
    class Meta:
        model = Spicies
        fields = ('id', 'spicy', 'foods')

class ChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chefs
        fields = ('id', 'name', 'state', 'description')

class RoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        fields = ('id', 'name', 'seats', 'description')