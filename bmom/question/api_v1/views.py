from rest_framework import viewsets

from .serializers import QuestionSerializer
from ..models import Question


class QuestionViewset(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    # def list(self, request, *args, **kwargs):
    #     print('in it')
    #     return super().list(request, *args, **kwargs)
    #
    # def retrieve(self, request, *args, **kwargs):
    #     print('in retrieve')
    #     return super().retrieve(request, *args, **kwargs)
