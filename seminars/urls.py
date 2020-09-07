
from django.contrib import admin
from django.urls import path, include
from .views import Try

urlpatterns = [
    path('try/', Try.as_view()),

]
