# Tablas de Multiplicar con Node
## Notas:
Los agumentos para crear un archivo txt, en la carpeta salida integrada en el repositorio

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla de multiplicar       [number] [required]
  -h, --hasta    Determina hasta que numero de quiere la tabla
                                               [number] [required] [default: 10]
  -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
```

## Descripcion
La app toma un base para hacer la tabla sobre esta, con el argumento    ```-b```  o  ```--base``` seguido del numero. <br>
Tambien toma como argumento hasta que numero sera la tabla en cuestion que por default lo hace hasta el 10, en caso de no entregar el argumento, con ```-h``` o  ```--hasta``` seguido del numero. <br>
Tambien toma un argumento que es opcional, que es de listar la tabla en consola, con ```-l```  o  ```--listar```. Por default no lo lista. <br>
Ejemplo para crear un tabla con base 5, hasta el 15, listandola en consola. <br>
```node app -b 5 -h 15 -l```
## Instalacion
- Clonar repositorio con:
```
git clone https://github.com/yechua-silva/proyecto-node-tablas.git
```
- Instalar dependencia con:
```
npm install
```
- Y listo, ya puedes crear las tablas de multiplicar que deseas

## Autor ✒️
**Yechua Silva**

* [LinkedIn](https://www.linkedin.com/in/yechua-silva/)

## Contratación
Si estás interesado en contratarme, puedes ponerte en contacto conmigo escribiendo a yechua-silva@outlook.cl para cualquier consulta o solicitud.