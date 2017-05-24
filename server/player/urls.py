# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^updatePosition/(?P<book_part_id>\d+)/(?P<position>\d+)$',
        views.update_position,
        name='update_position'),
    url(r'^listen/(?P<book_part_id>\d+)$',
        views.listen_part,
        name='listen_part'),
]