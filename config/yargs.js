//https://yargs.js.org/docs/
const argv = require('yargs')
    .option('b', { 
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Determina hasta que numero de quiere la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => { 
        if ( isNaN( argv.base )) {
            throw 'La base tiene que se un numero'
        }
        if ( isNaN( argv.hasta )) {
            throw 'El "hasta" debe de ser un numero'
        }
        // En caso de no haber errores
        return true
    } )
    .argv;

// Exportar argv por defecto
module.exports = argv;