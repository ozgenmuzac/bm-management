from rest_framework.viewsets import ModelViewSet

from bmom.member.api_v1.serializers import MemberSerializer
from bmom.member.models import Member


class MemberViewSet(ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
