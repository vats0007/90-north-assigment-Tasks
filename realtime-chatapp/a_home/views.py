from django.shortcuts import render

# Create your views here.
# Home View
def home_view(request):
    return render(request, 'home.html')
