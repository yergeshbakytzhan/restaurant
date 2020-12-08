from rest_framework import serializers
from Order.models import *


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'user', 'date', 'status')


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = ('id', 'order', 'foods', 'amount')
