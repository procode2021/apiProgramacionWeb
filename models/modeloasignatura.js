

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var asignaturaSchema = new Schema({
    nombre: {type:String},
area: {type:String}, 
docentes: [{type: Schema.Types.ObjectId,
    ref: 'modelodocentes'} ],
correo: {type:String}, 
    tema:{type:String},
    actividad:{type:String}, 
   
},

{timestamps:true
});
var asignaturaModel = mongoose.model('asignaturas',asignaturaSchema);
module.exports = asignaturaModel;







