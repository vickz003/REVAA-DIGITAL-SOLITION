from django.contrib import admin
from .models import CustomUser
from .models import Leads

# Register your models here.

admin.site.register(Leads)
admin.site.register(CustomUser)

# @admin.register(CustomUser)
# class CustomUserAdmin(admin.ModelAdmin):
#     list_display = ['employee_number']

