from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.


class Leads(models.Model):
    # creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,blank=True, null=True)
    Name = models.CharField(max_length=20)
    Mobile_Number = models.IntegerField()
    Business_Name = models.CharField(max_length=50)
    Business_Type = models.CharField(max_length=50)
    Location = models.CharField(max_length=50)
    Budget = models.CharField(max_length=50)
    Follow_up_date = models.DateField()
    Priority = models.CharField(max_length=30)
    Status = models.CharField(max_length=30)
    Email = models.CharField(max_length=50)
    Source = models.CharField(max_length=50)
    Services = models.TextField(max_length=200)
    Remark = models.TextField(max_length=500)
    Created_date = models.DateField()

    def __str__(self):
        return self.Name
    


from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    Employee_Number = models.CharField(max_length=10, primary_key=True)
    Employee_Photo = models.ImageField(null=True, blank=True)
    Employee_Name = models.CharField(max_length=255)
    Employee_Email = models.EmailField(max_length=30, unique=True)
    is_trainee = models.BooleanField(default=False)
    is_creative_developer = models.BooleanField(default=False)
    is_managing_director = models.BooleanField(default=False)
    is_business_development = models.BooleanField(default=False)
    is_graphic_design = models.BooleanField(default=False)
    is_web_development = models.BooleanField(default=False)
    is_video_editor = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.Employee_Name

