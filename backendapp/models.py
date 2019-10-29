from django.db import models

# Create your models here.
# The Author  can have many Book.
# The Book  can be Written by one Author.
import datetime

class Author(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name


class Book(models.Model):

    title = models.CharField(max_length=255)
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=datetime.datetime.now())
    book = models.ForeignKey(Author, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title


