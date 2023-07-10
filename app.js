const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')


console.clear() 


crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo => console.log(colors.rainbow(nombreArchivo), colors.cyan.underline('creado')))
    .catch( e => console.log(e))