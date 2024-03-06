
console.log("corriendo lab 13");

const express = require('express');
const app = express();

//antes de cualquier middleware
app.set('view engine', 'ejs'); //configura variables globales, utilizamos ejs
app.set('views', 'views'); //guarda en el primer views las vistas
//
const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); //para usar public
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));



const rutasConstrucciones = require('./routes/construcciones.routes');
app.use('/', rutasConstrucciones);


const rutasConstrucciones2 = require('./routes/random.routes');
app.use('/', rutasConstrucciones2);



app.use((request, response, next) => {
    response.status(404);

    response.sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3001);
