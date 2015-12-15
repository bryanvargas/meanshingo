var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Tareas = mongoose.model('Tareas');


//get - Listar Tareas
router.get('/tareas', function(req, res, next){
  Tareas.find(function (err, tareas) {
      if (err) {return next(err)}
      res.json(tareas)
  })
})

//Post - Agregar tarea
//POST sirve para agragar nuevas cosas
router.post('/tarea', function (req, res, next) {
    var tarea = new Tareas(req.body);
    
    tarea.save(function (err, tarea) {
      if(err) {
         return next(err) 
         }
      res.json(tarea);
    })
})


//PUT / Actualizar tarea
router.put('/tarea/:id', function (req, res, next) {
    Tareas.findById(req.params.id, function (err, tarea) {
        tarea.nombre = req.body.nombre;
        tarea.prioridad = req.body.prioridad;
        
        tarea.save(function(err) {
           if(err){return res.send(err)}
           
           res.json(tarea);
        });
    })
})

//DELETE / Eliminar tarea
router.delete('/tarea/:id', function (req, res, next) {
    var id = req.params.id;
    var nombre = req.params.nombre;
    var prioridad = req.params.prioridad;
   Tareas.findByIdAndRemove(id, function (err) {
       if(err){res.send(err)}
       res.json({message: 'la tarea se ha eliminado'});  
    })
   /* Tareas.remove( function (err) {
      if (err) {
        return res.send(err);
      }
      res.json({message: 'la tarea se ha eliminado'});
    });*/
})

module.exports = router;
