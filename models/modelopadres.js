var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  nombre1: {type:String}, 
  nombre2:{type:String}, 
  Apellido1:{type:String}, 
  apellido2:{type:String}, 
  telefono:{type:String}, 
  email:{type:String},
  direccion:{type:String} 
},

{timestamps:true
});
var UserModel = mongoose.model('modelopadres', UserSchema);
module.exports = UserModel;