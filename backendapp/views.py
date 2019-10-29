from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from rest_framework import viewsets
from backendapp.serialzer import UserSerializer, AuthorSerialize, BookSerialize
from backendapp.models import Author, Book
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import mixins, generics
from django.views.generic import View


class UserViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class Post(mixins.CreateModelMixin, generics.ListAPIView):
    serializer_class = (AuthorSerialize, BookSerialize)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
