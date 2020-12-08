from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from Basket import serializers
from rest_framework import status
from Basket.models import BasketItems
from Restaurant.models import Foods


class BasketView(APIView):
    serializers_class = serializers.BasketSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        basketitems = BasketItems.objects.select_related('food').filter(user=request.user)
        serializer = self.serializers_class(basketitems, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):

        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            try:
                basket_item = BasketItems.objects.get(user=request.user,
                                                      food=serializer.validated_data.get('food'))
                basket_item.amount = basket_item.amount + serializer.validated_data.get("amount")
                basket_item.save()
                return Response(self.serializers_class(basket_item).data)
            except BasketItems.DoesNotExist:
                serializer.save(user=request.user, food = Foods.objects.get(pk=request.data["food"]))
                return Response(serializer.data)
        else:
            Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class BasketDeleteView(APIView):
    serializers_class = serializers.BasketSerializer
    permission_classes = (IsAuthenticated,)

    def delete(self, request, pk, format=None):
        content = {
            'status': 'Not Found'
        }
        try:
            bakset_item = BasketItems.objects.get(pk=pk)
            bakset_item.delete()
            return Response(content, status.HTTP_200_OK)
        except BasketItems.DoesNotExist:
            return Response(content, status=status.HTTP_204_NO_CONTENT)
