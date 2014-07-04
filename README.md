# Examen 

## ToDo

* Hace falta diseño
* Mejorar el login de usuarios
* Integrar pruebas E2E
 
## Dependencias y bibliotecas

* AngularJS
* Karma
* Jasmine
* Bootstrap
* Grunt
* Bower
* npm
* express para producción

## Instalación en modo desarrollo

Para instalar jcsrexamen-opi es necesario tener [NodeJS y npm](http://nodejs.org/) instalados.

Después de clonar el repositorio únicamente se necesita instalar las dependencias con npm:

    npm install
    
Y después simplemente iniciar el servidor:

    grunt serve
    
Para ejecutar las pruebas:

    grunt test
    
## Descripción de estructura de app

* **app** Contiene la aplicación, el punto de entrada es **index.html**
* **app/scripts** Contiene los módulos de AngularJS divididos en Controladores, Directivas, Modelos y Servicios
* **app/views** Se encuentran los templates de las vistas
* **test** Pruebas de unidad, TDD
