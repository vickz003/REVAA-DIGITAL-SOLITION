from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('leads',views.leads, name='leads'),
    path('calls',views.calls, name='calls'),
    path('newleads',views.newleads, name='newleads'),
    path('download',views.exportdata, name='download'),
    path('leads/<int:lead_id>/', views.lead_detail, name='lead_detail'),
    path('dashbord/<int:lead_id>/', views.lead_detail, name='today_lead_detail'),
    path('messages',views.calls, name='calls'),
]
