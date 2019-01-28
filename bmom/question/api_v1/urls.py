from rest_framework import routers

from . import views

question_router = routers.SimpleRouter()
question_router.register(r'', views.QuestionViewset, base_name='question')
