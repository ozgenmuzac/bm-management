from rest_framework import routers

from . import views

member_router = routers.SimpleRouter()
member_router.register(r'', views.MemberViewSet, base_name='member')
