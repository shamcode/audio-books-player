# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from models import Book, BookPart


class BookPartInline(admin.TabularInline):
    model = BookPart
    extra = 1


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    exclude = []
    list_display = ('name', 'is_published', '_parts', 'created_at')

    inlines = (
        BookPartInline,
    )

    def _parts(self, obj):
        return obj.parts.all().count()


@admin.register(BookPart)
class BookPartAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'order', 'last_position')
