from django.contrib import admin
from .models import CustomUser,LeaveReq

admin.site.register(CustomUser)
admin.site.register(LeaveReq)