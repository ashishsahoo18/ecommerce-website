from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login


def login_page(request):

    if request.method == "POST":

        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(
            username=username,
            password=password
        )

        if user:
            login(request, user)
            return redirect("index")


    return render(request,"login.html")



def index(request):

    return render(request,"index.html")