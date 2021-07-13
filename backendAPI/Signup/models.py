from django.db import models

# Create your models here.
class Signup(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=30)
    Email = models.EmailField(max_length=30)
    Password=models.CharField(max_length=30)