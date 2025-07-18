from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .models import Usuario
from .serializers import UsuarioSerializer
import json

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        try:
            user = Usuario.objects.get(username=username)
            if user.check_password(password):
                return JsonResponse({'success': True, 'user_id': user.id, 'rol': user.rol})
            else:
                return JsonResponse({'success': False, 'error': 'Invalid credentials'}, status=401)
        except Usuario.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Invalid credentials'}, status=401)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def estadisticas_view(request):
    if request.method == 'GET':
        total_clientes = Usuario.objects.filter(rol='cliente').count()
        depresion = Usuario.objects.filter(rol='cliente', depresion__gt=0).count()
        ansiedad = Usuario.objects.filter(rol='cliente', ansiedad__gt=0).count()
        estres = Usuario.objects.filter(rol='cliente', estres__gt=0).count()
        
        stats = {
            'totalClientes': total_clientes,
            'depresion': depresion,
            'ansiedad': ansiedad,
            'estres': estres
        }
        
        return JsonResponse(stats)
    return JsonResponse({'error': 'Invalid request method'}, status=400)
