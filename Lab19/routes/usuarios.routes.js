
const express = require('express');
const router = express.Router();
const controllerUsuarios = require('../controllers/usuarios.controller');


//login get post
router.get('/login', controllerUsuarios.get_login);
router.post('/login', controllerUsuarios.post_login);
router.get('/logout', controllerUsuarios.get_logout);

//lab18
router.get('/signup', controllerUsuarios.get_signup);
router.post('/signup', controllerUsuarios.post_signup);


module.exports = router;