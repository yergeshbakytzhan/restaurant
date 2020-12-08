from django.urls import path
from Order import views

urlpatterns = [
    path('order/', views.OrderCreateView.as_view()),
]
