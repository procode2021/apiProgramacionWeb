
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventosSchema = new Schema({
    tema:String,
    actividad:String, 
    id_mensaje: {type: Schema.Types.ObjectId,
        ref: 'modelomensajes'},
    id_docente:{type: Schema.Types.ObjectId,
        ref: 'modelodocentes'},
    id_padres:[{type: Schema.Types.ObjectId,
        ref: 'modelopadres'}] 
},

{timestamps:true
});
var eventoModel = mongoose.model('eventomodelos',eventosSchema);
module.exports = eventoModel;





