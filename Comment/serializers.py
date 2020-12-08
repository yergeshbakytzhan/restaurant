from rest_framework import serializers
from Comment.models import Comment
from User.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'food', 'user', 'date')
