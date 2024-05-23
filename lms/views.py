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
            tid_id=req.POST.getlist('tid_id')
            totaldays=req.POST.getlist('totaldays')
            leave_type=req.POST.getlist('leave_type')
            status = req.POST.getlist('status')
            id = req.POST.getlist('id')
            for i in range(len(status)):
                if status[i] != "Pending":
                    instance = LeaveReq.objects.get(id=id[i])
                    instance.status = status[i]
                    instance.save()
                    if status[i]=="Approve":
                        instance=CustomUser.objects.get(id=tid_id[i])
                        if instance.staff_type:
                            instance=Teacher.objects.get(tid_id=tid_id[i])
                        else:
                            instance=NonTeacher.objects.get(tid_id=tid_id[i])
                        lt= getattr(instance,leave_type[i])
                        setattr(instance,leave_type[i],lt-float(totaldays[i]))
                        instance.save()   
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
            kd=req.POST.getlist('kd')
            if user.staff_type:
                instance=Teacher.objects.get(tid_id=user.id)
            else:
                instance=NonTeacher.objects.get(tid_id=user.id)
            for i in range(len(kd)):
                if kd[i]=="d":
                    l=LeaveReq.objects.get(id=id[i])
                    l.delete()
                else:
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
