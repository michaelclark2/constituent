from django.urls import path

from . import views

urlpatterns = [
    path('', views.ViewBills.as_view(), name='index')
]
