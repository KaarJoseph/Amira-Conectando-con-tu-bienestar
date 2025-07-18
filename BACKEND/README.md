# AMIRA: CONECTANDO CON TU BIENESTAR - Backend

## Descripción

AMIRA es una aplicación diseñada para ayudar en el pre-diagnóstico de la salud mental de los estudiantes, proporcionando un sistema que analiza niveles de depresión, ansiedad y estrés. Este repositorio contiene el código fuente del backend de la aplicación, desarrollado en Django.

## Requisitos

- Python (versión 3.8 o superior)
- Django (versión 3.1 o superior)

## Instalación

1. Clonar el repositorio o descargar los archivos del proyecto y descomprimirlos en el directorio deseado.

2. Navegar al directorio del proyecto:
   cd amira-backend

3. Crear un entorno virtual:
   python -m venv venv

4. Activar el entorno virtual:
   - En Windows:
     venv\Scripts\activate
   - En macOS/Linux:
     source venv/bin/activate

5. Instalar dependencias:
   pip install -r requirements.txt

## Configuración

1. Asegúrate de que el archivo `amira_backend/settings.py` esté configurado correctamente para usar SQLite (la base de datos por defecto en Django).

   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.sqlite3',
           'NAME': BASE_DIR / "db.sqlite3",
       }
   }

2. Aplicar las migraciones de la base de datos:
   python manage.py migrate

## Ejecución en Desarrollo

1. Iniciar el servidor de desarrollo:
   python manage.py runserver 0.0.0.0:8000

2. Acceder a la aplicación:
   - Desde tu navegador en tu computadora: http://localhost:8000
   - Desde cualquier dispositivo en la misma red usando la IP de tu computadora y el puerto 8000.

## Ejecución en Producción

1. Configurar las variables de entorno para producción en el archivo `amira_backend/settings.py`.

2. Iniciar el servidor en modo producción (Asegúrate de tener configurado un servidor web adecuado como Nginx o Apache).

## Estructura del Proyecto

- amira_backend/: Contiene la configuración de Django y los archivos principales del proyecto.
- api/: Contiene los archivos de la API y las vistas.
- models/: Contiene los modelos de la base de datos.
- migrations/: Contiene las migraciones de la base de datos.
- requirements.txt: Archivo de dependencias de Python.

## Funcionalidades

- Autenticación y Autorización: Manejo de usuarios y permisos.
- API REST: Provisión de endpoints para la interacción con el frontend.
- Análisis Emocional: Integración con Google Natural Language y GPT para análisis de texto y generación de respuestas.

## Licencia

Este proyecto está licenciado bajo los términos personales y con fines académicos.

## Contacto

Para preguntas, comentarios o soporte, por favor contacta a kaarunkuch@gmail.com
