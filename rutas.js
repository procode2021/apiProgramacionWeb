const {Router} = require('express');
const app = Router();
const modelodocente = require('./models/modelodocente')
const modeloasignatura = require('./models/modeloasignatura')
const modeloestudiantes  = require('./models/modeloestudiante')
const modelopadres  = require('./models/modelopadres')
const modelomensaje  = require('./models/modelomensaje')
const modeloevento  = require('./models/eventosmodelos')
const modeloasistencia = require('./models/modelosasistencias')
app.post("/login/", (req, res)=>{
    res.send("ok");
})



//enviar, traer,  eliminar y actualizar mensajes
app.post('/estudiante/', async  (req, res)=> {
    const {pnombre, snombre, papellido, sapellido, grado} = req.body
     const newestudiante = new modeloestudiantes({primernombre: pnombre, segundonombre:snombre,
      primerapellido:papellido, segundoapellido:sapellido, grado: grado});
      const est = await newestudiante.save()
      if(est){
        res.send('Estudiante guardado');
      }else{
        res.send('Estudiante no  guardado');
      }
  
});
app.get('/estudiante/', async (req, res)=>{
     const estudiantes  =  await modeloestudiantes.find();
     res.send(estudiantes);
})

app.post("/estudiante/:id", async (req, res)=>{
   const estudiante = await modeloestudiantes.findById(req.params.id)

   res.send(estudiante)
}
)
app.delete("/estudiante/:id", async(req, res)=>{

  const estudiante = await modeloestudiantes.findByIdAndDelete(req.params.id)

  res.send(estudiante)
})
app.put('/estudiante/:id', async (req, res)=> {

  const estudiante = await modeloestudiantes.findByIdAndUpdate(req.params.id, req.body)
  res.send(estudiante)
});




//enviar, traer,  eliminar y actualizar evento
  app.post('/evento/',  async (req, res)=> {
    const newevento =  new modeloevento(req.body);
    const evento = await newevento.save();
    res.send(evento)
  });
  app.post('/evento/:id', async (req, res)=>{
    const evento =  await modeloevento.findById(req.params.id)
     res.send(evento);
  })
  app.get('/evento/', async (req, res)=>{
    const eventos = await modeloevento.find()
    res.send(eventos)
 })
  app.delete("/evento/:id",  async(req, res)=>{
    const evento = await modeloevento.findByIdAndDelete(req.params.id)
    res.send(evento)
  })
  app.put('/evento/:id',async (req, res)=> {
    const evento = await modeloevento.findByIdAndUpdate(req.params.id, req.body)
    res.send(evento)
  });
  



  //enviar, traer,  eliminar y actualizar asistencia
  app.post('/asistencia/', async (req, res)=> {
    const newasistencia = new modeloasistencia(req.body)
    const asistencia = await newasistencia.save();
    res.send(asistencia);
  });
  app.get('/asistencia/',async (req, res)=>{
     const asistencias =await  modeloasistencia.find()
     res.send(asistencias)
  })
  app.delete('/asistencia/:id', async(req, res)=>{
   const asistencia =await  modeloasistencia.findByIdAndDelete(req.params.id)
    res.send(asistencia)
 })


  app.put('/asistencia/:id', async (req, res)=> {
    const asistencia =await modeloasistencia.findByIdAndUpdate(req.params.id, req.body)
    res.send(asistencia)
  });




  //enviar, traer,  eliminar y actualizar esttudiante
app.post('/mensaje/', async (req, res)=> {
    const mensaje = new modelomensaje(req.body)
    const ms =await mensaje.save()
    res.send(ms);
  });
  app.get('/mensaje/',async (req, res)=>{
   const mensajes = await modelomensaje.find();
   res.send(mensajes)
  })
  app.post('/mensaje/:id',async (req, res)=>{
    const mensaje = await modelomensaje.findById(req.params.id)
    res.send(mensaje)
 })
  app.delete("/mensaje/:id", async (req, res)=>{
    const mensaje = await modelomensaje.findByIdAndDelete(req.params.id)

    res.send(mensaje)
  })
  app.put('/mensaje/:id', async (req, res)=> {
    const mensaje = await modelomensaje.findByIdAndUpdate(req.params.id)
    res.send(mensaje);
  });




  //enviar, traer,  eliminar y actualizar docente
app.post('/docente/', async (req, res)=> {
    console.log(req.body)
    const docente = new modelodocente(req.body)
    const dt  = await docente.save()
    res.send(dt);
  });
  app.get('/docente/', async (req, res)=>{
     const docentes = await modelodocente.find()
     res.send(docentes)
  })

  app.post('/docente/:id', async (req, res)=>{
    const docente = await modelodocente.findById(req.params.id)
    res.send(docente)
 })
  app.delete("/docente/:id", async (req, res)=>{
    const docente = await modelodocente.findByIdAndDelete(req.params.id)
      res.send(docente)
  })
  app.put('/docente/:id', async (req, res)=> {
    const docente = await modelodocente.findByIdAndUpdate(req.params.id, req.body)
    res.send(docente);
  });




  //enviar, traer,  eliminar y actualizar asignatura
  app.post('/asignatura/', async (req, res)=> {
    const  asignatura = new modeloasignatura(req.body)
    const asg  = await asignatura.save()
    res.send(asg);
  });
  app.post('/asignatura/:id', async (req, res)=>{
   const asignatura = modeloasignatura.findById(req.params.id) 
     res.send(asignatura)
  })
  app.get('/asignatura/', async (req, res)=>{
   
    const asignaturas = modeloasignatura.find()
    res.send(asignaturas)
 })
  app.delete("/asignatura/:id", async (req, res)=>{
    const asignatura = modeloasignatura.findByIdAndDelete(req.params.id) 
    res.send(asignatura)
    
  })
  app.put('/asignatura/:id', async (req, res)=> {
    const asignatura = modeloasignatura.findOneAndUpdate(req.params.id, req.body)
    res.send(asignatura)
  });



  //enviar, traer,  eliminar y actualizar padre
  app.post('/padre/', async (req, res)=> {
    const padre = new modelopadres(req.body)
    const pd = await padre.save()

    res.send(padre);
  });
  app.post('/padre/:id', async (req, res)=>{
     const padre = await modelopadres.findById(req.params.id)
     res.send(padre)
  })
  app.get('/padre/', async (req, res)=>{
     const padres = await modelopadres.find();
    res.send(padres)
 })
  app.delete("/padre/:id", async (req, res)=>{
      const padre = await modelopadres.findByIdAndDelete(req.params.id)
      res.send(padre)
  })
  app.put('/padre/:id', async (req, res)=> {
    const padre = await modelopadres.findByIdAndUpdate(req.params.id, req.body)
    res.send(padre);
  });

  module.exports =app