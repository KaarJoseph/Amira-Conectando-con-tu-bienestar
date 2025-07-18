from django.db import migrations
import django.contrib.auth.hashers

def create_initial_data(apps, schema_editor):
    Usuario = apps.get_model('appAmira', 'Usuario')

    # Crear usuarios psicólogos
    Usuario.objects.create(
        username='Joseph',
        nombre='Kaar',
        apellido='Joseph',
        cedula='1400730618',
        email='kmashingashi@est.ups.edu.ec',
        password=django.contrib.auth.hashers.make_password('joseph123'),
        rol='psicologo',
        depresion=0,
        ansiedad=0,
        estres=0
    )

    # Crear usuarios clientes
    Usuario.objects.create(
        username='Tania',
        nombre='Tania',
        apellido='Lojano',
        cedula='0987654321',
        email='tlojano@est.ups.edu.ec',
        password=django.contrib.auth.hashers.make_password('tania123'),
        rol='cliente',
        depresion=10,
        ansiedad=15,
        estres=20
    )

class Migration(migrations.Migration):

    dependencies = [
        ('appAmira', '0002_alter_usuario_options_alter_usuario_managers_and_more'),
    ]

    operations = [
        migrations.RunPython(create_initial_data),
    ]
