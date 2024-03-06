const express = require('express');
const router = express.Router();

//este es el controller
const construccionesController = require (`../controllers/construcciones.controller`)

//para usar controllers
router.get(`/construir`, construccionesController.get_construir);

router.post(`/construir`, construccionesController.post_construir);

router.get(`/`, construccionesController.get_root);


module.exports = router;