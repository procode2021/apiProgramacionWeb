var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estudianteSchema = new Schema({


  primernombre:{
    type:String, 
    
  },
  segundonombre:{
    type:String,
    required:true
  },
  primerapellido:{
      type:String
  },
  segundoapellido:{
      type: String
  },
  grado:{
      type: String
  }
},

{timestamps:true
});
var estudianteModel = mongoose.model('modeloestudiantes', estudianteSchema);
module.exports = estudianteModel;