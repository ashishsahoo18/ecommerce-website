from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


def login_page(request):

    if request.method == "POST":

        username = request.POST.get("username")
        password = request.POST.get("password")


        user = authenticate(
            username=username,
            password=password
        )


        if user is not None:

            login(request, user)

            return redirect("home")


    return render(request, "login.html")



def home(request):

    return render(request, "index.html")



def logout_page(request):

    logout(request)

    return redirect("login")