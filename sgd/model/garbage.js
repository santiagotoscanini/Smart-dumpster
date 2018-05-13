var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nombre_residuo: {type:String, required: true},
    tipo_residuo: {type:String, required: true},
    descripcion: {type:String, required: true}
},{
    versionKey: false // No aparece un campo '__v' en la base de datos
});

module.exports = mongoose.model('Residuos', schema);