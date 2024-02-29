
//antes de cualquier middleware
app.set('view engine', 'ejs'); //configura variables globales, utilizamos ejs
app.set('views', 'views'); //guarda en el primer views las vistas
//


router.get('/una-ruta', (request, response, next) => {
    response.render('vista_ejs'); //el parametro es el archivo ejs que queremos mandar como respuesta, render sustituye a send
});


//ejemplo
router.get('/construir', (request, response, next) => {
    response.render('construir'); //el parametro es el archivo ejs que queremos mandar como respuesta, render sustituye a send
});

