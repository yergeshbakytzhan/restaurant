from rest_framework import serializers
from Basket.models import BasketItems
from Restaurant.serializers import FoodsSerializer


class BasketSerializer(serializers.ModelSerializer):
    food = FoodsSerializer(read_only=True)
    class Meta:
        model = BasketItems
        fields = ('id', 'food', 'user', 'amount')
