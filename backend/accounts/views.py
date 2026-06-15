from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


def login_page(request):

    if request.method == "POST":

        username = request.POST["username"]
        password = request.POST["password"]


        user = authenticate(
            request,
            username=username,
            password=password
        )


        if user is not None:

            login(request, user)

            return redirect("/")


    return render(request, "login.html")



def logout_page(request):

    logout(request)

    return redirect("/")