const express = require("express");
const app = express();
const bodyParser = require("body-parser")

require('./database');
app.use(bodyParser.json())
//rutas
app.use(require('./rutas'))

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});