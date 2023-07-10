const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';

        let consola = '';

        for ( let i = 1; i <= hasta; i++ ) {
            let valor = i * base

            consola += `    ${colors.red(base)} ${colors.green('x')} ${colors.cyan(i)} ${colors.green('=')} ${colors.magenta.underline(valor)}\n`;

            salida += `${base} x ${i} = ${valor}\n`
        }
        
        if ( listar ) {
            console.log(colors.bgCyan('===================='));
            console.log(colors.cyan('    Tabla del:'), colors.red(base));
            console.log(colors.bgCyan('===================='));

            console.log(consola);
            }
        
        let nombreArchivo = `./salida/tabla-${base}.txt`
        fs.writeFileSync(nombreArchivo , salida )
        return nombreArchivo
    } catch (error) {
        throw error
    }

}

// Exportar funcion 
module.exports = {
    crearArchivo
}