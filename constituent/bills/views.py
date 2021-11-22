from django.http import HttpResponse
from django.views import View

class ViewBills(View):
    
    def get(self, request):
        return HttpResponse('<h1>AYELMAO</h1>')