const express = require('express');
const router = express.Router();

  // router.get('/random2', (request, response, next) => {
  //   response.write(header);
  //   response.write(`
  //     <h1 class="title">URL RANDOM2</h1>
  //   `);
  //   response.write(footer);
  //   response.end();
  // });

  // router.get('/random3', (request, response, next) => {
  //   response.write(header);
  //   response.write(`
  //     <h1 class="title">URL RANDOM3 </h1>
  //   `);
  //   response.write(footer);
  //   response.end();
  // });


  //construccionesController es el nombre del controlador
  const construccionesController = require (`../controllers/construcciones.controller`)

  router.get(`/funcionalidad`, construccionesController.get_funcionalidad);

  router.post(`/funcionalidad`, construccionesController.post_funcionalidad);


  router.get(`/poner`, construccionesController.get_rootFuncionalidad);




  module.exports = router; //poner siempre


  