const Construccion = require(`../models/construccion.model`)

exports.get_construir = (request, response, next) => {
    
    //request username
    response.render('construir', {
        username: request.session.username || '',
    }); 
};

exports.post_construir = (request, response, next) => {
    console.log(request.body);
    const construccion =
        new Construccion(request.body.nombre, request.body.imagen);
    construccion.save();

    //crea cookie, cuidado con el =
    response.setHeader('Set-Cookie', 'ultima_construccion=' + request.body.nombre + `; HttpOnly`);
    //el HttpOnly lo hace seguro

    response.redirect('/');
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
    response.render(`Construcciones`, {
        construcciones: Construccion.fetchAll(),
        ultima_construccion: ultima_construccion,

        username: request.session.username || '',
    })
//


    response.render('construcciones', {
        construcciones: Construccion.fetchAll()
    });
}