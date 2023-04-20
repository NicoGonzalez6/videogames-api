## Instrucciones para levantar el ambiente

- Al clonar el repo se deben completar el archivo env con el siguiente formato.


```bash

DB_USER=
DB_PASSWORD=
DB_NAME=games-api
DB_PORT=
DB_HOST=

```

- Luego ejecutar los siguientes scripts para preparar el ambiente.

```bash
$ npm install

$ npm createdb

$ npm populatedb
```

- Ya tendremos el ambiente listo para continuar.

## Info extra

- Ejecutando los siguientes scripts podremos hacer correr los test o largar el server local.

```bash
$ npm test

$ npm run start:dev
```

url-local = http://localhost:3999/api/games
swagger = http://localhost:3999/docs

url-prod = https://games-api.up.railway.app/api/games
swagger-prod = https://games-api.up.railway.app/docs
