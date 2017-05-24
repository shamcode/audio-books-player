# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Book(models.Model):
    name = models.CharField(max_length=255)
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(u'Created at', auto_now_add=True)

    class Meta:
        ordering = ('is_published', '-created_at')

    def __unicode__(self):
        return self.name


class BookPart(models.Model):
    STATUS_WAIT = 1
    STATUS_LISTEN = 2

    STATUS_TYPE = (
        (STATUS_WAIT, 'Wait'),
        (STATUS_LISTEN, 'Listen')
    )

    book = models.ForeignKey('Book', related_name='parts')
    file = models.FileField(upload_to='books')
    status = models.IntegerField('Status', choices=STATUS_TYPE, default=STATUS_WAIT)
    order = models.IntegerField()
    last_position = models.IntegerField('Position', default=0)

    class Meta:
        ordering = ('order',)

    @property
    def is_wait(self):
        return BookPart.STATUS_WAIT == self.status

    @property
    def is_listen(self):
        return BookPart.STATUS_LISTEN == self.status
