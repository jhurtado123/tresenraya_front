# Tres en Raya (Front)
Pequeña web con una interfaz gráfica que te permite jugar al tres en raya contra el servidor\
La web funciona con React (v16.13) y con Axios



## Instalación

- Descargar el respositorio o clonarlo con git clone en la rama master (https://github.com/jhurtado123/tresenraya_front.git)
- Instalar las dependencias ejecutando el comando `npm install` en la raíz del proyecto.
- Crear el archivo de variables de entorno .env con los siguientes valores:\

REACT_APP_BACKEND_URI=http://localhost:3001

- Ejecutar `npm start` para iniciar el servidor

**Si de desea inciar el back end en otro puerto hay que indicarselo en la variable de entorno del front para evitar problemas relacionados con el CORS**


## Información

### Contextos
La aplicación funciona con dos contextos, el de estado y el de tablero.
Cada contexto permite tener un acceso global a un estado desde cualquier componente.\
Dichos contextos se encuentran en la carpeta /context

### Api manager service
Servicio para encapsular todas las peticiones ajax al servidor en un mismo fichero.
Cada función devuelve una promesa sin resolver que tendrá como resultado la respuesta del servidor o un fallo.
El api manager se encuentra en: /services/apiManager/game.js

### Componentes
Hay tres componentes clave.
- **App.js**: Componente central y padre, se encarga de gestionar el juego en este caso de decidir de que jugador es el siguiente turno y de gestionar el movimiento del servidor en el tablero
- **Board.js**: Componente del tablero, consume del BoardProvider (context) y también checkea el estado de este después de cada jugada.
- **StatusRow.js**: Componente inferior que muestra información relevante (turno, has ganado, has perdido o hay empate) de la partida. Consume del GameStatusProvider (context).

### Reinicio de la partida
El botón de reinicio se muestra en el componente StatusRow en el caso de: Ganar, Perder, Empatar o un error en el servidor.
En funcionamiento consiste en resetear el estado del contexto Board.js y devolver el GameStatus context a el turno del jugador humano.

