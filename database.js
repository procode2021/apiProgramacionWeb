const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:user@cluster0-ra04w.mongodb.net/test?retryWrites=true&w=majority',{
   useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
}, (err) => {
    if (err) throw err;
    console.log("connected to mongo");
})