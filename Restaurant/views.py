from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny, SAFE_METHODS
from rest_framework.response import Response
from django.db.models import Q
from rest_framework import status
from Restaurant import serializers
from Restaurant.models import *

class IsAdminUserOrReadOnly(IsAdminUser):

    def has_permission(self, request, view):
        is_admin = super(
            IsAdminUserOrReadOnly,
            self).has_permission(request,view)
        return request.method in SAFE_METHODS or is_admin



class FoodsViews(APIView):
    serializers_class = serializers.FoodsSerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get(self, request, format=None):
        foods = Foods.objects.all()
        serializer = self.serializers_class(foods, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):

        serializer = self.serializers_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class FoodsDetailViews(APIView):
    serializers_class = serializers.FoodsSerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get_queryset(self, pk):
        try:
            foods = Foods.objects.get(pk=pk)
        except Foods.DoesNotExist:
            return False
        return foods

    def put(self, request, pk, format=None):
        foods = self.get_queryset(pk)

        if not foods:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(foods, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk, format=None):
        foods = self.get_queryset(pk)
        if not foods:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(foods)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        foods = self.get_queryset(pk)

        if not foods:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)
        foods.delete()
        return Response({'msg': 'NO Content'}, status=status.HTTP_204_NO_CONTENT)

class FoodsSearchViews(APIView):
    serializers_class = serializers.FoodsSerializer
    def get(self, request, key, cat_id,format=None):
        if cat_id == 0:
            foods = Foods.objects.filter(Q(name__contains=key) | Q(price__contains=key) | Q(category__category__contains=key))
        else:
            foods = Foods.objects.filter(Q(category__id=cat_id), Q(name__contains=key) | Q(price__contains=key) | Q(category__category__contains=key))
        serializer = self.serializers_class(foods, many=True)
        return Response(serializer.data)

class FoodsLimitViews(APIView):
    serializers_class = serializers.FoodsSerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get(self, request, format=None):
        foods = Foods.objects.all()[:3]
        serializer = self.serializers_class(foods, many=True)
        return Response(serializer.data)

class CategoryViews(APIView):
    serializers_class = serializers.CategorySerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get(self, request, format=None):
        category = Category.objects.all()
        serializer = self.serializers_class(category, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailViews(APIView):
    serializers_class = serializers.CategorySerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get_queryset(self, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return False
        return category

    def put(self, request, pk, format=None):
        category = self.get_queryset(pk)

        if not category:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(category, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk, format=None):
        category = self.get_queryset(pk)
        if not category:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(category)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        category = self.get_queryset(pk)

        if not category:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)
        category.delete()
        return Response({'msg': 'NO Content'}, status=status.HTTP_204_NO_CONTENT)


class SpiciesViews(APIView):
    serializers_class = serializers.SpicySerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get(self, request, format=None):
        spicies = Spicies.objects.all()
        serializer = self.serializers_class(spicies, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class SpiciesDetailViews(APIView):
    serializers_class = serializers.SpicySerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get_queryset(self, pk):
        try:
            spicies = Spicies.objects.get(pk=pk)
        except Spicies.DoesNotExist:
            return False
        return spicies

    def put(self, request, pk, format=None):
        spicies = self.get_queryset(pk)

        if not spicies:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(spicies, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk, format=None):
        spicies = self.get_queryset(pk)
        if not spicies:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(spicies)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        spicies = self.get_queryset(pk)

        if not spicies:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)
        spicies.delete()
        return Response({'msg': 'NO Content'}, status=status.HTTP_204_NO_CONTENT)

class ChefsViews(APIView):
    serializers_class = serializers.ChefSerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get(self, request, format=None):
        chefs = Chefs.objects.all()
        serializer = self.serializers_class(chefs, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class ChefsDetailViews(APIView):
    serializers_class = serializers.ChefSerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    def get_queryset(self, pk):
        try:
            chefs = Chefs.objects.get(pk=pk)
        except Chefs.DoesNotExist:
            return False
        return chefs

    def put(self, request, pk, format=None):
        chefs = self.get_queryset(pk)

        if not chefs:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(chefs, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk, format=None):
        chefs = self.get_queryset(pk)
        if not chefs:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)

        serializer = self.serializers_class(chefs)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        chefs = self.get_queryset(pk)

        if not chefs:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status.HTTP_404_NOT_FOUND)
        chefs.delete()
        return Response({'msg': 'NO Content'}, status=status.HTTP_204_NO_CONTENT)