const fs = require('fs');
var colors = require('colors');

const crearArchivo = async( base, listar, hasta ) => {    

    try {       

        let salida = '';
        
        for( let i = 1; i <= hasta ; i++){        
            salida += (`${ base } x ${ i } = ${ base *i }\n`)

        }  

        if( listar ){
            
            console.log('==================');
            console.log('Tabla del: '.rainbow, base);
            console.log('==================');

          

            console.log(colors.bgMagenta(salida));
        }        

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
            
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
        console.log(err);
    }


    

    /* return new Promise( ( resolve, reject ) => {       
        console.log('==================');
        console.log('Tabla del: ', base);
        console.log('==================');

        let salida = '';
    
        for( let i = 1; i <= 10 ; i++){        
            salida += (`    ${ base } x ${ i } = ${ base *i }\n`)

        }  
        console.log(salida);

        fs.writeFileSync( `tabla-${base}.txt`, salida)
        
        resolve (`tabla-${base}.txt`);        
    }); */
}

module.exports = {
    crearArchivo
}