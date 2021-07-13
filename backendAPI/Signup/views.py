from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Signup.models import Signup
from Signup.serializers import SignupSerializer
# Create your views here.


@csrf_exempt
def signup(request):
    print("Signup")
    if request.method == 'POST':
        signup_data = JSONParser().parse(request)
        signup_serializer = SignupSerializer(data=signup_data)

        #Email Already exists Auth
        logins = Signup.objects.all()
        login_serializer = SignupSerializer(logins, many=True)

        for i in login_serializer.data:
            if(signup_data["Email"]==list(i.values())[2]):
                return JsonResponse("Email Already Exists !", safe=False)
        if signup_serializer.is_valid():
            signup_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)


def login(request):
    if request.method == 'GET':
        logins = Signup.objects.all()
        login_serializer = SignupSerializer(logins, many=True)
        return JsonResponse(login_serializer.data, safe=False)
