# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse
from django.core.exceptions import PermissionDenied, ValidationError
from models import BookPart, Book


def index(request):
    if not request.user.is_authenticated():
        raise PermissionDenied
    context = dict(
        books=Book.objects.filter(is_published=True)
    )
    return render(request, 'index.html', context)


def update_position(request, book_part_id, position):
    if not request.user.is_authenticated():
        raise PermissionDenied
    part = BookPart.objects.get(pk=book_part_id)
    if part.is_listen:
        raise ValidationError
    part.last_position = position
    part.save()
    return HttpResponse()


def listen_part(request, book_part_id):
    if not request.user.is_authenticated():
        raise PermissionDenied
    part = BookPart.objects.get(pk=book_part_id)
    if part.is_listen:
        raise ValidationError
    part.status = BookPart.STATUS_LISTEN
    part.save()
    book = part.book
    if 0 == book.parts.filter(status=BookPart.STATUS_WAIT).count():
        book.is_published = False
        book.save()
    return HttpResponse()