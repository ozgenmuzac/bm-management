"""bmom URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from bmom.account.api_v1.urls import account_router

from bmom.utils.views import ReactAppLoaderView

api_urls = [
    url(r'^account/', include(account_router)),
]

urlpatterns = [
    url(r'^api-1.0/', include(api_urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    url(r'^management/', ReactAppLoaderView.as_view()),
    url(r'^member-management/', ReactAppLoaderView.as_view()),
    url(r'^login/', ReactAppLoaderView.as_view()),
]
