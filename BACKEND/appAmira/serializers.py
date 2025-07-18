from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'username', 'nombre', 'apellido', 'cedula', 'email', 'password', 'rol', 'depresion', 'ansiedad', 'estres']
