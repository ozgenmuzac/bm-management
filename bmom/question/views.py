from django.views.generic import TemplateView


class QuestionsView(TemplateView):
    template_name = 'question/index.html'
