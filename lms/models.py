from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime

class CustomUser(AbstractUser):
    staff_type = models.BooleanField(null=True)
    ifhod= models.BooleanField(null=True)
    dept= models.CharField(max_length=100,null=True)

    def create_user(self, username, email, password, **extra_fields):
        extra_fields.setdefault('staff_type', False)
        extra_fields.setdefault('ifhod', False)
        extra_fields.setdefault('dept',"Null")
        return self._create_user(username, email, password, **extra_fields)

class Teacher(models.Model):
    tid= models.ForeignKey(CustomUser ,on_delete=models.CASCADE)
    first_name= models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    EL= models.FloatField(default=5)
    CL= models.FloatField(default=15)
    RH= models.FloatField(default=2)
    SL= models.FloatField(default=15)
    VL= models.FloatField(default=30)

class NonTeacher(models.Model):
    tid= models.ForeignKey(CustomUser ,on_delete=models.CASCADE)
    first_name= models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    EL= models.FloatField(default=15)
    CL= models.FloatField(default=15)
    RH= models.FloatField(default=2)
    VL= models.FloatField(default=30)

class LeaveReq(models.Model):
    tid = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dept = models.CharField(max_length=100)
    leave_desc = models.CharField(max_length=100)
    leave_type = models.CharField(max_length=100)
    startdate = models.DateField()
    enddate = models.DateField()
    totaldays = models.FloatField()
    status = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        if self.startdate and self.enddate and (not self.totaldays):
            if(type(self.enddate)==str):
                ed = datetime.strptime(self.enddate, '%Y-%m-%d')
                sd = datetime.strptime(self.startdate, '%Y-%m-%d')
            else:
                ed=self.enddate
                sd=self.startdate
            delta = ed - sd
            self.totaldays = delta.days + 1       
        super().save(*args, **kwargs)