from django.conf.urls import url
from Signup import views

urlpatterns=[
    url(r'^signup/$',views.signup),
    url(r'^login/$',views.login)
    
] 