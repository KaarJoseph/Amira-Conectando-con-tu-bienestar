# AMIRA: CONECTANDO CON TU BIENESTAR - Frontend

## Descripción

AMIRA es una aplicación diseñada para ayudar en el pre-diagnóstico de la salud mental de los estudiantes, proporcionando un sistema que analiza niveles de depresión, ansiedad y estrés. Este repositorio contiene el código fuente del frontend de la aplicación, desarrollado en Angular.

## Requisitos

- Node.js (versión 12 o superior)
- Angular CLI (versión 12 o superior)
- npm (versión 6 o superior)

## Instalación

1. Descargar los archivos del proyecto y descomprimirlos en el directorio deseado.

2. Navegar al directorio del proyecto:
   cd amira-frontend

3. Instalar dependencias:
   npm install

## Configuración

1. Archivo de configuración:
   Asegúrate de que el archivo `src/environments/environment.ts` esté configurado correctamente con la URL de tu backend y otras variables necesarias.

   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8000/api'
   };

## Ejecución en Desarrollo

1. Iniciar el servidor de desarrollo:
   ng serve --host 0.0.0.0 --port 4200

2. Acceder a la aplicación:
   - Desde tu navegador en tu computadora: http://localhost:4200
   - Desde tu dispositivo móvil conectado a la misma red, usa la IP de tu computadora con el puerto 4200. Por ejemplo, si la IP de tu computadora es 192.168.1.100, accede a http://192.168.1.100:4200

## Ejecución en Producción

1. Compilar la aplicación:
   ng build --prod

2. Servir los archivos compilados:
   Usa un servidor web como Nginx, Apache o cualquier otro para servir los archivos estáticos generados en el directorio `dist/`.

## Estructura del Proyecto

- src/app/: Contiene los componentes, servicios y módulos de la aplicación.
- src/assets/: Archivos estáticos como imágenes y estilos.
- src/environments/: Configuraciones para diferentes entornos (desarrollo y producción).
- src/index.html: Página principal de la aplicación.
- src/styles.css: Estilos globales de la aplicación.

## Funcionalidades

- Entrada de Datos: Formulario para que los estudiantes ingresen información relevante para el análisis.
- Análisis Emocional: Visualización de los resultados del análisis de depresión, ansiedad y estrés.
- Reportes: Generación de gráficos y reportes para el seguimiento del estado emocional de los estudiantes.
- Notificaciones: Envío de recordatorios y notificaciones a los estudiantes.

## Licencia

Este proyecto está licenciado bajo los términos personales y con fines académicos.

## Contacto

Para preguntas, comentarios o soporte, por favor contacta a kaarunkuch@gmail.com