from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from lms.models import CustomUser,Teacher, NonTeacher, LeaveReq
from datetime import datetime

def index(req):
    return render(req, "index.html")

def login(req):
    if req.method== "POST":
        username=req.POST['username']
        password=req.POST['password']

        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(req,user)
            return redirect("/", {'user':user})
        else:
            return render(req, 'login.html', {'alert_message': 'Invalid credentials'})
    else:
        return render(req, "login.html")

def register(req):
    if req.method== "POST":
        first_name=req.POST['first_name']
        last_name=req.POST['last_name']
        username=req.POST['username']
        staff_type=req.POST['staff_type']
        ifhod=req.POST['ifhod']
        dept=req.POST['dept']
        password1=req.POST['password1']
        password2=req.POST['password2']
        email=req.POST['email']
        if password1==password2:
            if CustomUser.objects.filter(username=username).exists():
                return render(req, 'register.html', {'alert_message': 'Username taken'})
            elif CustomUser.objects.filter(email=email).exists():
                return render(req, 'register.html', {'alert_message': 'Email taken'})
            else:
                user=CustomUser.objects.create_user(username=username,password=password1,email=email,first_name=first_name,last_name=last_name,staff_type=staff_type,ifhod=ifhod,dept=dept)
                user.save()
                if int(staff_type):
                    teach=Teacher.objects.create(tid_id=user.id,first_name=first_name,last_name=last_name)
                    teach.save()
                else:
                    teach=NonTeacher.objects.create(tid_id=user.id,first_name=first_name,last_name=last_name)
                    teach.save()
                return render(req, "register.html",{'alert_message': 'Added New User'})
        else:
            return render(req, 'register.html', {'alert_message': 'Password didnt match'})
    return render(req, "register.html")

def logout(req):
    auth.logout(req)
    return render(req,"index.html")

def top(req):
    return render(req, "top.html")

def sample(req):
    return render(req ,"sample.html")

def features(req):
    return render(req ,"features.html")

def form(req):
    user=req.user
    if user.staff_type:
        instance=Teacher.objects.get(tid_id=user.id)
    else:
        instance=NonTeacher.objects.get(tid_id=user.id)
    if req.method== "POST":
        leave_desc=req.POST['leave_desc']
        leave_type=req.POST['leave_type']
        startdate=req.POST['startdate']
        enddate=req.POST['enddate']
        half=req.POST['half']

        if half=="more":
            ed = datetime.strptime(enddate, '%Y-%m-%d')
            sd = datetime.strptime(startdate, '%Y-%m-%d')
            totalDays=(ed-sd).days+1
        elif half=="half":
            totalDays=0.5
        else:
            totalDays=1
        if leave_type=='EL' and totalDays<4:
            return render(req, 'form.html', {'alert_message': 'Apply 4 or more leaves for EL',"stf":instance})
        if leave_type=='CL' and totalDays>4:
            return render(req, 'form.html', {'alert_message': 'You can only apply at most 4 leaves in CL',"stf":instance})
        daysleft= getattr(instance,leave_type)
        if daysleft<totalDays:
            return render(req, 'form.html', {'alert_message': 'There arent sufficient number of leaves left in the chosen leave type.',"stf":instance})
        else:
            lr= LeaveReq.objects.create(dept=user.dept,tid_id=user.id,first_name=user.first_name,last_name=user.last_name,leave_desc=leave_desc,leave_type=leave_type,startdate=startdate,enddate=enddate,totaldays=totalDays,status="Pending")
            lr.save()
            return render(req, 'form.html', {'alert_message': 'Your Leave application is submitted, Wait for the response.',"stf":instance})
    else:
        return render(req, "form.html",{"stf":instance})

def details(req):
    user=req.user
    if user.is_superuser:
        if req.method== "POST":
            if 'accept' in req.POST:
                accept=req.POST['accept']
                l = LeaveReq.objects.get(id=accept)
                l.status = "Approve"
                l.save()
                instance=CustomUser.objects.get(id=l.tid_id)
                if instance.staff_type:
                    instance=Teacher.objects.get(tid_id=l.tid_id)
                else:
                    instance=NonTeacher.objects.get(tid_id=l.tid_id)
                lt= getattr(instance,l.leave_type)
                setattr(instance,l.leave_type,lt-float(l.totaldays))
                instance.save()
            elif 'reject' in req.POST:
                reject=req.POST['reject']
                instance = LeaveReq.objects.get(id=reject)
                instance.status = "Reject"
                instance.save()
            elif 'accept_all' in req.POST:
                lr=LeaveReq.objects.filter(status="Pending")
                for l in lr:
                    l.status= "Approve"
                    l.save()
                    instance=CustomUser.objects.get(id=l.tid_id)
                    if instance.staff_type:
                        instance=Teacher.objects.get(tid_id=l.tid_id)
                    else:
                        instance=NonTeacher.objects.get(tid_id=l.tid_id)
                    lt= getattr(instance,l.leave_type)
                    setattr(instance,l.leave_type,lt-float(l.totaldays))
                    instance.save()
            elif 'reject_all' in req.POST:
                instance=LeaveReq.objects.filter(status="Pending")
                instance.update(status="Reject")
        lr=LeaveReq.objects.filter(status="Pending")
        return render(req ,"details.html",{"lr":lr})
    else:
        alert_message=""
        if req.method== "POST":
            id= req.POST.getlist('id')
            leave_desc=req.POST.getlist('leave_desc')
            leave_type=req.POST.getlist('leave_type')
            startdate=req.POST.getlist('startdate')
            enddate=req.POST.getlist('enddate')
            if user.staff_type:
                instance=Teacher.objects.get(tid_id=user.id)
            else:
                instance=NonTeacher.objects.get(tid_id=user.id)
            if 'delete' in req.POST:
                delete=req.POST['delete']
                l=LeaveReq.objects.get(id=delete)
                l.delete()
            elif 'submit' in req.POST:
                for i in range(len(leave_type)):
                    daysleft= getattr(instance,leave_type[i])
                    ed = datetime.strptime(enddate[i], '%Y-%m-%d')
                    sd = datetime.strptime(startdate[i], '%Y-%m-%d')
                    totalDays=(ed-sd).days+1
                    if daysleft<totalDays:
                        alert_message='There arent sufficient number of leaves left in the chosen leave type.'
                        break
                    else:
                        l=LeaveReq.objects.get(id=id[i])
                        l.leave_desc=leave_desc[i]
                        l.leave_type=leave_type[i]
                        l.startdate=startdate[i]
                        l.enddate=enddate[i]
                        if l.totaldays==0.5 and totalDays==1:
                            l.totaldays=0.5
                        else:
                            l.totaldays=totalDays
                        l.save()
                        alert_message="Your Leave application is submitted, Wait for the response."
        lr=LeaveReq.objects.filter(tid_id=user.id).order_by('-id')
        return render(req ,"details.html",{"lr":lr,"alert_message":alert_message})

def refresh(req):
    if not req.user.is_superuser:
        return HttpResponse("You are not authorized to access this page.", status=403)

    if req.method == 'POST':
        confirm = req.POST.get('confirm', False)
        if confirm:
            t=Teacher.objects.all()
            for i in t:
                i.CL+=15
                i.EL+=5
                i.RH=2
                i.SL=15
                i.save()
            t=NonTeacher.objects.all()
            for i in t:
                i.CL+=15
                i.EL+=5
                i.RH=2
                i.save()
            return HttpResponse('<h4 style="color:white;">Data has been reset successfully.</h4>')
        else:
            return redirect('refresh')
    return render(req, 'refresh.html')

def data(req):
    if req.user.staff_type:
        instance=Teacher.objects.get(tid_id=req.user.id)
    else:
        instance=NonTeacher.objects.get(tid_id=req.user.id)
    return render(req ,"data.html",{"typ":instance})

def staff(req):
    t=Teacher.objects.all()
    nt=NonTeacher.objects.all()
    return render(req ,"staff.html",{"t":t,"nt":nt})

def ex(req):
    return render(req,"ex.html")

#ngrok http --domain=growing-egret-harmless.ngrok-free.app 8000