# Ionic
Evolución en el lenguaje de programación Ionic

Navega por las diferentes carpetas para poder ver una serie de actividades y proyectos que he realizado a lo largo del curso escolar 2019-20

<img src="https://miracomohacerlo.com/wp-content/uploads/2019/06/1173-1-e1559768762202.jpg">

<h2 style="text-aling:center">APUNTES</h2>

________________________________________________________________________________

### CREACIÓN DE UN PROYECTO

* ionic start plantilla1 blank -->Creación de un proyecto en blanco de tipo blank (Tipos: blank/tag...)
_____________________________________

### LANZAR EL SERVIDOR

* ionic serve--> Iniciar el servidor

* ionic serve --lag --> Lanza el servidor, pero nos dice como se ve la aplicacion en diferentes dispositivos

* ionic serve --port=8888 --> Lanza el servidor en el puerto elegido
_____________________________________

### LANZAR EL SERVIDOR EN MOVIL

* ionic cordova prepare

* ionic serve --devapp
_____________________________________

### COMPILAR UNA APLICACIÓN

1º
* ionic cordova build android   (Este paso es solo compilado)-->Una vez termine en el terminal, nos aparece una ruta larga, nos la copiamos

* native-run android --app  *ruta larga antes copiada*  --device  -->Ya visualizamos nuestra aplicación en la pantalla de nuestro movil

2º
* ionic cordova run android (Este paso es compilacion y ejecucion)  NOTA: Si queremos forzar que nuestra aplicación vaya a un movil conectado por USB tenemos que añadir al comando --device al final [Tener en cuenta: Debemos activar la depuración por USB en nuestro movil y conectarlo con un cable que permita la transferencia de datos]
_____________________________________

### PÁGINAS EN NUESTRA APLICACIÓN (Proyecto4/catalogo-de-Ionic)

* ionic g page pages/test --> Para crear páginas

* npx ng g --help --> Para saber que páginas puedo generar
_____________________________________

### COMPONENTES EN NUESTRA APLICACION 

* ionic g component components/malaga-description -->Para crear un componente

-->En home.module.ts es donde se hacen las declaraciones y las importaciones 
_____________________________________

### PRACTICA DE COMPONENTES EN NUESTRA APLICACIÓN


ionic g class model/empleado
cr

() -->.ts a .html
[] -->.html a .ts
[()] --> flujo

_____________________________________

### GRID

_____________________________________

### CALCULADORA

_____________________________________

### EJERCICIOS-BASICOS

_____________________________________
SERVICIOS: plantilla7

Referencia: https://github.com/LuisJoseSanchez/ionic-todo-storage

app-outing.module.ts -->es el enrrutamiento, añadir linea para que coja tambien el id en la ruta

crear servicio: ionic g service services/task

task.service.ts 

_____________________________________

_____________________________________