from django.shortcuts import render

# Create your views here.

# from my_project.example.models import Profile
from rest_framework.renderers import TemplateHTMLRenderer, StaticHTMLRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.http import FileResponse
# file = open('seminars/templates/base_form.html', "r")
# txt =  f'document.write("{file.read()}");'
#
# print(txt)
class Try(APIView):
    # renderer_classes = [StaticHTMLRenderer]
    # template_name = 'base_form.html'

    def get(self, request):
        # data = f'document.write("{txt}");'
        return FileResponse(open('seminars/templates/JSForm.js', 'rb'))
