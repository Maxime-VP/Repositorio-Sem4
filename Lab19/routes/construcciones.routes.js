const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');

const canView = require('../util/can-view');
const canBuild = require('../util/can-build');


const construccionesController = require (`../controllers/construcciones.controller`)

//para usar controllers
// router.get(`/construir`, construccionesController.get_construir);

// router.post(`/construir`, construccionesController.post_construir);

// router.get('/:construccion_id', construccionesController.get_root);

// router.get(`/`, construccionesController.get_root);


router.get('/construir', isAuth, canBuild, construccionesController.get_construir);
router.post('/construir', isAuth, canBuild, construccionesController.post_construir);
router.get('/:construccion_id', isAuth, canView, construccionesController.get_root);
router.get('/', isAuth, canView, construccionesController.get_root);

module.exports = router;