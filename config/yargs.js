const argv = require('yargs')
            .option('b', {
                alias:  'base',
                type: 'number',
                demandOption: true,
                describe: 'es la base de la tabla'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'opcion para mostrar la tabla'


            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'numero hasta donde alcanza la tabla'


            })
            .check(( argv,options) => {
                if( isNaN(argv.b)){
                    throw  'la base debe ser un numero'
                }
                return true;
            })
            .argv;

module.exports = argv;