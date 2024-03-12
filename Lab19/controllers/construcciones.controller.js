const Construccion = require(`../models/construccion.model`)

exports.get_construir = (request, response, next) => {
    
    //request username
    response.render('construir', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    }); 
};

exports.post_construir = (request, response, next) => {
    console.log(request.body);
    const construccion =
        new Construccion(request.body.nombre, request.body.imagen);
    
//agregado en lab14 metodo para guardar
    construccion.save()
    .then(([rows, fieldData]) => {
        response.setHeader('Set-Cookie', 
            'ultima_construccion=' + request.body.nombre + '; HttpOnly');
        response.redirect('/construcciones');
    })
    .catch((error) => {console.log(error)});


    //crea cookie, cuidado con el =
    // response.setHeader('Set-Cookie', 'ultima_construccion=' + request.body.nombre + `; HttpOnly`);
    //el HttpOnly lo hace seguro

};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');

    //logea la cookie
    console.log(request.get('Cookie'));
    

//cookie
    
    let ultima_construccion = request.get(`Cookie`);

    if (ultima_construccion){
        ultima_construccion = ultima_construccion.split(`=`)[1];
    } else {
        ultima_construccion = ``;
    }

    console.log(ultima_construccion);


    
    Construccion.fetch(request.params.construccion_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('construcciones', {
            construcciones: rows,
            ultima_construccion: ultima_construccion,
            username: request.session.username || '',
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error);
    });
//
}