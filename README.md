# Proyecto inicial - Curso de RXJS


* Este es un repositorio con todos los ejercicios del curso de RXJS de cero hasta los detalles del profesor Fernando Herrera


* [Enlace al curso](https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/)
* [Fernando Herrera (Profesor)](https://fernando-herrera.com/)


* Mi Opinion respecto al curso: el curso es muy interesante empiezas a ver la diferencia entre RXJS y Promises algo que es muy esencial y de mucho interes de conocer la diferencia entre estos dos, el profesor va mostrando los operadores mas usados de la liberia RXJS. hasta los menos conocidos. Entre las cosas que mas vale destacar es que el profesor maneja muy bien el tema y sus ejemplo o ejercicios son muy practicos y muy facil de entender, muetra muy bien la forma de tipar todo el codigo, ya que el curso esta desarrollado con typescript.


* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)


