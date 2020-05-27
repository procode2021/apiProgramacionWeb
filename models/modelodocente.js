var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var docenteSchema = new Schema({


    nombre1:{type:String},
    nombre2: {type:String}, 
    apellido1: {type:String}, 
    apellido2: {type:String},
    telefono:{type:String}, 
    direccion: {type:String} 
},

{timestamps:true
});
var docenteModel = mongoose.model('modelodocentes', docenteSchema);
module.exports = docenteModel;