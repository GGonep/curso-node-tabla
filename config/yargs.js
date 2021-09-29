const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',        
        default: 10
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'hola mundo'
    })
    .check( (argv, options) => {                    
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un numero'
        }
        if( isNaN( argv.h ) ){
            throw 'El multiplicando tiene que ser un numero'
        }
        return true;
    })
    .argv;

    module.exports = argv;