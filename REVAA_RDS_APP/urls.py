from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('login',views.login_page, name='login'),
    path('logout',views.logout_page, name='logout'),
    path('leads',views.leads, name='leads'),
    path('leads/filter',views.filter, name='filter'),



    path('leads/<int:lead_id>/edit',views.editlead, name='editlead'),
    path('leads/<int:lead_id>/updates',views.updatedata, name='update'),
    path('newleads',views.newleads, name='newleads'),
    path('leads/importdata',views.import_data, name='importdata'),
    path('download',views.exportdata, name='download'),
    path('leads/<int:lead_id>/', views.lead_detail, name='lead_detail'),
    path('dashbord/<int:lead_id>/', views.lead_detail, name='today_lead_detail'),
    path('messages',views.calls, name='calls'),
]
