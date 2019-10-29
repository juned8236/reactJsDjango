"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from backendapp import views as backendapp_views
from frontendapp import urls as frontendapp_urls
from django.conf.urls import url

router = routers.DefaultRouter()
router.register(r'users', backendapp_views.UserViewSet)

urlpatterns = [
      path('grappelli/', include('grappelli.urls')), # grappelli URLS
    path('', include(frontendapp_urls)),
    path('api/', include(router.urls)),
    path('dashboard/', admin.site.urls),
url(r'^post/$', backendapp_views.Post.as_view()),
 ]
