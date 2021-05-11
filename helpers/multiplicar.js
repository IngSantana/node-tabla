const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 5, listar,hasta) => {

return new Promise( (resolve,reject) => {



    let salida= '';
    consola = '';

    for (let i = 1; i <= hasta; i++) {


        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        
    }
    console.log(listar)

    if (listar) {
        console.log('================================'.green);
        console.log('Tabla del: '.green + base);
        console.log('================================'.green);
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt creado`);

    ( salida)
        ? resolve(salida)
        :
        reject('Error inesperado');
}

);
}


module.exports = {
   crearArchivo
}