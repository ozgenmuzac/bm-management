from django.conf.urls import url

from . import views

account_router = [
    url('^login/', views.LoginViewSet.as_view(), name='login')
]
