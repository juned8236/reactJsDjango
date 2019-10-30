from django.contrib import admin

# Register your models here.
from django.contrib import admin

# Register your models here.


from backendapp.models import Author
from backendapp.models import Book
# Register your models here.


class AuthorAdmin(admin.ModelAdmin):
    list_display = ['name']


admin.site.register(Author, AuthorAdmin)


class BookAdmin(admin.ModelAdmin):
    list_display = ['id', 'book','title','created_at']
    list_filter = ['book']
admin.site.register(Book, BookAdmin)
