from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from Order import serializers
from rest_framework import status
from Order.models import *
from Basket.models import BasketItems
from Basket import serializers
from django.conf import settings



class OrderCreateView(APIView):
    basket_serializers_class = serializers.BasketSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        basket = BasketItems.objects.filter(user=request.user)
        basket_items = self.basket_serializers_class(basket, many=True)
        if len(basket_items.data) > 0:
            order = Order(
                user=request.user,
                status=1
            )
            order.save()
            for item in basket_items.data:
                orderItem = OrderItems(
                    order=order,
                    foods=Foods.objects.get(pk=item.get('foods')),
                    amount=item.get('amount')
                )
                orderItem.save()

            basket.delete()
            return Response(status=status.HTTP_200_OK)

        return Response({'msg': 'BAD_REQUEST'}, status=status.HTTP_400_BAD_REQUEST)
