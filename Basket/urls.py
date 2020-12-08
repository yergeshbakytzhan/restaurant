from django.urls import path
from Basket import views

urlpatterns = [
    path('basket/', views.BasketView.as_view()),
    path('basket/<int:pk>', views.BasketDeleteView.as_view()),
]
