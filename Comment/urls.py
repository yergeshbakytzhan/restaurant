from django.urls import path
from Comment import views

urlpatterns = [
    path('comments/<int:food_id>', views.CommentListView.as_view()),
    path('comments/', views.CommentCreateView.as_view()),
]
