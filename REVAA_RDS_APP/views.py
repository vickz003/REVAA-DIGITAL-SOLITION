from django.shortcuts import render, redirect,get_object_or_404, HttpResponse
from REVAA_RDS_APP.models import Leads
from django.utils import timezone
from django.contrib import messages
from datetime import datetime, timedelta
from django.db.models import Q
from django.shortcuts import redirect
from django.http import HttpResponse
import openpyxl
from openpyxl.styles import Font, PatternFill
 
# Create your views here.

def index(request):
    Dashboard = "active"
    today = datetime.now().date()
    tomorrow = today + timedelta(days=1)
    today_leads = Leads.objects.filter(Follow_up_date__range=(today, tomorrow))
    overall = len(today_leads)
    if today_leads.exists():
        first_lead = today_leads.first()
    else:
        pass

    # today details
    todayleads = Leads.objects.filter(Follow_up_date__range=(today, today))
    today_leads_count = len(todayleads)
    todayleads_completed = len(Leads.objects.filter(
    Q(Follow_up_date=today) & Q(Status="Completed")))

    # Tomarrow
    Tomarrow = Leads.objects.filter(Follow_up_date__range=(tomorrow, tomorrow))
    Tomarrow_leads_count = len(Tomarrow)
    Tomarrowleads_completed = len(Leads.objects.filter(
    Q(Follow_up_date=tomorrow) & Q(Status="Completed")))

    # Over all
    overall_complited = todayleads_completed+Tomarrowleads_completed
    return render(request, 'index.html',
                  {'today_leads':today_leads,'overall':overall,'today_leads_count':today_leads_count,'todayleads_completed':todayleads_completed,
                 'Tomarrow_leads_count':Tomarrow_leads_count,'Tomarrowleads_completed':Tomarrowleads_completed,'overall_complited':overall_complited,
                 'Dashboard':Dashboard,'first_lead':first_lead})

def leads(request):
    Leadss = "active"
    All_leads = Leads.objects.all()[::-1]
    last_lead = Leads.objects.last()
    leadheding = "Last Lead"

    return render(request, 'leads.html',{'leads':All_leads,'last_lead':last_lead,'leadheding':leadheding,'Leads':Leadss})

def calls(request):
    return render(request, 'calls.html')

def lead_detail(request, lead_id):
    Leadss = "active"
    All_leads = Leads.objects.all()[::-1]
    leaddtails = Leads.objects.get(id = lead_id)
    leadheding = "Lead Details"
    hidden = "container-hidden"

    lead = get_object_or_404(Leads, pk=lead_id)
    context = {'lead': lead,'leads':All_leads,'leaddtails':leaddtails,'leadheding':leadheding,'hidden':hidden,'Leads':Leadss}
    return render(request, 'leads.html', context)

def newleads(request):
    if request.method == "POST":
        name = request.POST["Name"]
        phone = request.POST["Contact_Number"]
        email = request.POST["Email_id"]
        location = request.POST["Location"]
        business_name = request.POST["Business_name"]
        budget = request.POST["Budget"]
        source = request.POST["Source"]
        services = request.POST.getlist('service')
        Source_Remarks = request.POST.get("Source_Remarks", "")
        status = request.POST["Status"]
        business_type = request.POST["Bussiness_types"]
        priority = request.POST["Priority"]
        current_date = timezone.now().date()
        followup_date = request.POST["Followupdate"]
        newlead = Leads(
            Name=name,
            Mobile_Number=phone,
            Email=email,
            Location=location,
            Business_Name=business_name,
            Budget=budget,
            Source=source,
            Services=services,
            Status=status,
            Business_Type=business_type,
            Priority=priority,
            Remark = Source_Remarks,
            Created_date = current_date,
            Follow_up_date=followup_date,
        )
        newlead.save()
        messages.success(request, 'Lead successfully added.')
        return redirect("leads")

    return render(request, 'leads.html')


# Download Leads

def exportdata(request):
    queryset = Leads.objects.all()
    wb = openpyxl.Workbook()
    ws = wb.active

    headers = ['Name', 'Mobile Number', 'Business Name', 'Business Type', 'Location', 'Budget', 'Follow-up Date', 'Priority', 'Status', 'Email', 'Source', 'Services', 'Remark', 'Created Date']

    header_style = Font(name='Arial', bold=True, color="FFFFFF")
    header_fill = PatternFill(start_color="000000", end_color="000000", fill_type="solid")

    for col_num, header in enumerate(headers, 1):
        cell = ws.cell(row=1, column=col_num, value=header)
        cell.font = header_style
        cell.fill = header_fill

    for row_num, lead in enumerate(queryset, start=2):
        data = [lead.Name, lead.Mobile_Number, lead.Business_Name, lead.Business_Type, lead.Location, lead.Budget, lead.Follow_up_date, lead.Priority, lead.Status, lead.Email, lead.Source, lead.Services, lead.Remark, lead.Created_date]
        for col_num, value in enumerate(data, start=1):
            cell = ws.cell(row=row_num, column=col_num, value=value)

    response = HttpResponse(content_type='application/ms-excel')
    response['Content-Disposition'] = 'attachment; filename=leads.xlsx'
    wb.save(response)

    return response


