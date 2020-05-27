
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var asistenciaSchema = new Schema({
    hora:{type:Date},
    fecha:{type:Date},
    eventos: [{type: Schema.Types.ObjectId,
       ref: 'eventomodelos'}], 
    estudiantes: [{type: Schema.Types.ObjectId,
       ref: 'modeloestudiantes'}],  
},

{timestamps:true
});
var asistenciaModel = mongoose.model('asistencias',asistenciaSchema);
module.exports = asistenciaModel;







