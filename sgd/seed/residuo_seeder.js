var Residuo = require('../model/garbage');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nico:toor@sgd-ftwrh.mongodb.net/reciclaje')

var residuos =  [
    new Residuo({
        nombre_residuo: 'papel',
        tipo_residuo: 'amarillo',
        descripcion: 'asdasdss'
    }),
    new Residuo({
        nombre_residuo: 'botella de vidrio',
        tipo_residuo: 'blanco',
        descripcion: 'asdasd'
    }),
    new Residuo({
        nombre_residuo: 'carton',
        tipo_residuo: 'azul',
        descripcion: 'asdasdsa'
    })
];
//seeder doesnt run in the app ,

var done = 0;
//loop para guardar las cosas y desp desconectarse cuando termine de registrar los productos
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








