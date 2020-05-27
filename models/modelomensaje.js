var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({


    hora: {type:Date},
    texto:{type:String}, 
    tipo:{type:String},
    nombre: {type:String}, 
    padres:[{type: Schema.Types.ObjectId,
        ref: 'modelopadres'}
      ]
       
},

{timestamps:true
});
var UserModel = mongoose.model('modelosmensajes', UserSchema);
module.exports = UserModel;