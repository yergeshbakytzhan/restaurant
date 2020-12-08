from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from Comment.models import *
from rest_framework.response import Response
from Comment import serializers
from rest_framework import status


class CommentListView(APIView):
    serializers_class = serializers.CommentSerializer

    def get(self, request, food_id, format=None):
        comments = Comment.objects.select_related('user').order_by('-date').filter(food=food_id)
        serializer = self.serializers_class(comments, many=True)
        return Response(serializer.data)


class CommentCreateView(APIView):
    serializers_class = serializers.CommentSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
