from django.urls import path
from Restaurant import views

urlpatterns = [
    path('foods', views.FoodsViews.as_view()),
    path('foods/<int:pk>', views.FoodsDetailViews.as_view()),
    path('foods/<str:key>/<int:cat_id>/search', views.FoodsSearchViews.as_view()),
    path('foods/', views.FoodsLimitViews.as_view()),
    path('category', views.CategoryViews.as_view()),
    path('category/<int:pk>', views.CategoryDetailViews.as_view()),
    path('spicies', views.SpiciesViews.as_view()),
    path('spicies/<int:pk>', views.SpiciesDetailViews.as_view()),
    path('chefs', views.ChefsViews.as_view()),
    path('chefs/<int:pk>', views.ChefsDetailViews.as_view()),
]
