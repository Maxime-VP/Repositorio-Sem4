
console.log("corriendo lab 19");

const express = require('express');
const app = express();


//para usar sessiones
const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


app.set('view engine', 'ejs'); //configura variables globales, utilizamos ejs
app.set('views', 'views'); //guarda en el primer views las vistas


const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); //para usar public
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Agregar protección contra ataques de CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 


//usa la ruta de usuario
const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/users', rutasUsuarios);


//usa rutas de construcciones
const rutasConstrucciones = require('./routes/construcciones.routes');
app.use('/construcciones', rutasConstrucciones);

//usa rutas mias (randoms)
const rutasConstrucciones2 = require('./routes/random.routes');
app.use('/', rutasConstrucciones2);




app.use((request, response, next) => {
    response.status(404);

    response.sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3001);