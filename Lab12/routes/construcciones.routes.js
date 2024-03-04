const express = require('express');
const router = express.Router();

const construcciones = [{nombre: "Casa de Minecraft", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg"}];

//Las cosas de la ruta deben de ir antes que lo general
router.get('/construir', (request, response, next) => {
  response.render(`construir`)
  //response.end();
});


// checar qpex con esto, es lo que usa para publicar cosas en la principal
router.post(`/construir`,(request, response, next) => {
    
  console.log(request.body);
  construcciones.push(request.body);

  // filesystem.appendFileSync('Lab11.txt', construcciones.nombre);

  response.redirect(`/`)

});


router.get(`/`,(request, response, next) => {
  response.render('construcciones', {
    construcciones: construcciones,
});
});


module.exports = router;