from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login, name="login") ,
    path("register", views.register, name="register"),
    path("logout", views.logout, name="logout"),
    path("top", views.top, name="top"),
    path("sample", views.sample, name="sample"),
    path("features", views.features, name="features"),
    path("form", views.form, name="form"),
    path("details", views.details, name="details"),
    path("data", views.data, name="data"),
    path("refresh", views.refresh, name="refresh"),
    path("staff", views.staff, name="staff"),
    path("ex", views.ex, name="ex")
]