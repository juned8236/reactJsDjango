from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import serializers
from backendapp.models import Book,Author

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class AuthorSerialize(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields='__all__'

class BookSerialize(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields='__all__'
