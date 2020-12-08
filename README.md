
# ADS2 - Fase 1

## Inicio

Instalar las dependecias (librerias)
```bash
npm install
```

Iniciar el server
```bash
npm start
# http://localhost:3000/
```

No esta configurado para que se refresque cada vez que hagan un cambio (Ej. nodemon), asi que tendran que detener y volver a iniciar el proyecto.

## Desarrollo

Si installan librerias por favor usar

```
npm install <nombre> --save
```

O si es una dependencia de desarrollo
```
npm install <nombre> --save-dev
```

**Importante**

Si miran que alguien agrego cambios al package.json

```
npm install
```


## Pruebas Unitarias

Se utilizara `mocha`, este se invoca con

```bash
npm run test
```

`mocha` buscara el archivo `test.js`, agregar en ese archivo las pruebas unitarias, ya hay un ejemplo.