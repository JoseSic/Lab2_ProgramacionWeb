# Front End - Proyecto Final Progrmación Web

_El presente proyecto es un desarrollo realizado en el curso "Programación Web" de la Universidad Rafael Landivar, que tiene como objetivo poner en practica los conocimientos adquiridos en clase, así como la investigación de nuevas tecnologías y lenguajes. Como propuesta se presenta una aplicación tipo instagram donde los usuarios podrán subir fotos agregando información extra que complementen a la foto_


### Pre-requisitos 📋

#### Editor de texto
_Primeramente debes tener un editor de texto como lo es Atom, Notepad++, Sublime Text, entre otros; se recomienda el uso de Visual Studio Code debido a las funcionalidades que este posee._
* [VSC](https://code.visualstudio.com/) - Visual Studio Code

#### Node.Js
* Para verificar su versión de Node.js ejecute node -v en una ventana terminal/consola 
* Para descargar Node.js, dirijase a https://nodejs.org/es/.

### Aplicación Back End
_El siguiente proyecto funciona en conjunto con api desarrollada en Node Js, puedes encontrar el API en el siguiente link_
* https://github.com/JoseSic/Lab5_ProgramacionWeb

_Para generar una conexión al API debe buscar la carpeta datos2.service donde encontrará la siguiennte porción de código:_

```
constructor() {
    this.axiosClient = axios.create({
      baseURL: "CONEXIÓN",
      timeout: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
    })
  }
```
### Instalación 🔧
_En la consola del editor que se utilizando se debe ingresar a la carpeta PROYECTOWEB y ejecutar el siguiente comando, para instalar todas las dependencias del proyecto._
```
$ npm install
```

### Ejecutar Aplicación
_Ejecute el comando ng serve en la cosola. Navegue hacia http://localhost:4200/. La pagina web estará corriendo en esa direccion url._
## Autores ✒️

* **José Sic** - *1121114*
