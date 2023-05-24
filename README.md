<p align="center">
    <img src="https://media.licdn.com/dms/image/C560BAQE5kuDynLMSSw/company-logo_200_200/0/1680191024110?e=1692835200&v=beta&t=oFmtkAccfB57QKbbuFhMrLuYYNoZzh5S8FfpT5OBF5E" width="150">
</p>
<p align="center">
    <img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="100">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" width="50">
    <img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" width="50">
</p>

# Reto técnico - Frontend

En este reto se creó una interfaz de usuario interactiva en Vue con Typescript. Su objetivo principal es brindar una experiencia visual y eficiente para interactuar con la API REST del backend y administrar usuarios. De esa forma los usuarios pueden realizar operaciones CRUD (crear, leer, actualizar y eliminar) en la base de datos de manera simplificada y fluida.

### _Tabla de contenidos:_
* **[1] [Requisitos](#requisitos-)**
* **[2] [Instalación](#instalación-)**
* **[3] [Funcionalidades](#funcionalidades-)**
* **[4] [Autor](#autor-%EF%B8%8F)**

## Requisitos 📋

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados y configurados en tu entorno de desarrollo:

- [NodeJS](https://nodejs.org/) - Es necesario tenerlo instalado para instalar las dependencias requeridas.

_Nota: Si quieres saber si ya lo tienes instalado ejecuta este comando:_
``` node -v ```

## Instalación 💻

1. Clona el repositorio en tu máquina local:

   ``` git clone https://github.com/KevinLarriega98/reto_tecnico_frontend_solvethex.git ```
2. Navega hasta el directorio raíz del proyecto:

   ``` cd nombre-de-tu-carpeta ```
3. Instala las dependencias del proyecto:

   ``` npm install ```
4. Inicia el servidor
``` npm start ``` o ``` npm run dev ``` si estás en un entorno de desarrollo
5. El servidor estará disponible en la siguiente URL: `http://localhost:5173`.

## Funcionalidades 📐

1. **CreateUser.vue:** Este componente se encarga de mostrar un formulario para crear un nuevo usuario. Permite ingresar el nombre de usuario y el correo electrónico del usuario y luego enviar los datos al backend para su creación.

2. **EditUser.vue:** Este componente se encarga de mostrar un formulario para editar un usuario existente. Recupera los datos del usuario desde el backend utilizando su ID y los muestra en los campos correspondientes. Permite modificar el nombre de usuario y el correo electrónico del usuario y luego enviar los datos al backend para su actualización.

3. **UserList.vue:** Este componente muestra una lista de usuarios obtenidos del backend. Recupera los datos de todos los usuarios y los muestra en una tabla o lista. También proporciona opciones para ver los detalles de un usuario específico, editar un usuario o eliminarlo.

_Nota: Estos componentes se utilizan en conjunto con el enrutador **(router.ts)** para crear las diferentes vistas de la aplicación. Además, se utiliza un servicio de API **(apiService.ts)** para interactuar con los endpoints del backend y realizar las operaciones CRUD (crear, leer, actualizar y eliminar) de los usuarios._

## Autor ✒️

- **Nombre:** Kevin Larriega Palomino  
- **Correo:** kevinlarriega@gmail.com 
- **GitHub:** https://github.com/KevinLarriega98