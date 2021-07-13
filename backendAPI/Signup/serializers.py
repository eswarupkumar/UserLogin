from rest_framework import serializers
from Signup.models import Signup

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signup
        fields = ('Id',
                  'Name',
                  'Email',
                  'Password')