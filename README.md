# API Mocking Routes (PBACKEND 3 CODERHOUSE)

Este proyecto incluye rutas para obtener datos mock (ficticios) de usuarios y mascotas.
También incluye Docker y test

## Docker
**URL** https://hub.docker.com/repository/docker/eduardonavarrotest/coder-docker-eduardo

## Rutas

### Obtener mascotas ficticias

**Ruta**: `/mockingpets`  
**Método**: `GET`  
**Descripción**: Obtiene una lista de mascotas ficticias.

### Obtener usuarios ficticios

**Ruta**: `/mockingusers`  
**Método**: `GET`  
**Descripción**: Obtiene una lista de usuarios ficticios.

### Generar datos ficticios

**Ruta**: `/generateData`  
**Método**: `POST`  
**Descripción**: Genera datos ficticios dinámicamente. Recibe las cantidades a crear de mascotas y usuarios en el siguiente formato:

```json
{
  "pets": 5,
  "users": 7
}
```


## Instrucciones

1. Clonar el repositorio.
2. Ejecutar el servidor con los comandos necesarios (e.g., `npm start`).
3. Realizar las peticiones a las rutas especificadas para obtener los datos mock.

