var Residuo = require('../model/garbage');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nico:toor@sgd-ftwrh.mongodb.net/reciclaje')

var residuos =  [
    new Residuo({
        nombre_residuo: 'papel',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'todo',
        tipo_residuo: 'todo'
    }),
    new Residuo({
        nombre_residuo: 'cartón',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'fotocopias',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'servilleta',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'plástico',
        tipo_residuo: 'amarillo'
    }),
    new Residuo({
        nombre_residuo: 'botella de plástico',
        tipo_residuo: 'amarillo'
    }),
    new Residuo({
        nombre_residuo: 'bolsa',
        tipo_residuo: 'amarillo'
    }),
    new Residuo({
        nombre_residuo: 'vaso de plástico',
        tipo_residuo: 'amarillo'
    }),
    new Residuo({
        nombre_residuo: 'envoltorio de papel',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'envoltorio de plástico',
        tipo_residuo: 'amarillo'
    }),
    new Residuo({
        nombre_residuo: 'botella de vidrio',
        tipo_residuo: 'verde'
    }),
    new Residuo({
        nombre_residuo: 'cubiertos de plástico',
        tipo_residuo: 'amarillo'
    }),
    new Residuo({
        nombre_residuo: 'vidrio',
        tipo_residuo: 'verde'
    }),
    new Residuo({
        nombre_residuo: 'ropa',
        tipo_residuo: 'verde'
    }),
    new Residuo({
        nombre_residuo: 'caja de plástico',
        tipo_residuo: 'amarillo'
    }),
    new Residuo({
        nombre_residuo: 'caja de jugo',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'folletos',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'diario',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'revistas',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'caja de cartón corrugado',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'revistas',
        tipo_residuo: 'azul'
    }),
    new Residuo({
        nombre_residuo: 'botella de vino',
        tipo_residuo: 'verde'
    }),
    new Residuo({
        nombre_residuo: 'caja de faisán',
        tipo_residuo: 'verde'
    }),
    new Residuo({
        nombre_residuo: 'botella de whisky',
        tipo_residuo: 'verde'
    }),
    
];
//seeder doesnt run in the app ,

var done = 0;
//loop para guardar las cosas
//Despues desconectarse cuando termine de registrar los productos
for(var i=0; i< residuos.length;i++){
    residuos[i].save(function (err, result) {
        done++;
        if(done== residuos.length){
            console.log('data added');
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}








