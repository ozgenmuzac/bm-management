from django.views.generic import TemplateView


class ReactAppLoaderView(TemplateView):
    template_name = 'index.html'
