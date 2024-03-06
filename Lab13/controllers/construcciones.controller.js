const Construccion = require(`../models/construccion.model`);
const Funcionalidad = require("../models/funcionalidad.model");


exports.get_construir = (request, response, next) => {
    response.render('construir'); 
};

exports.post_construir = (request, response, next) => {
    console.log(request.body);
    const construccion =
        new Construccion(request.body.nombre, request.body.imagen);
    construccion.save();
    response.redirect('/');
};

exports.get_funcionalidad = (request, response, next) => {
    response.render('funcionalidad'); 
};


//crea nuevo objeto funcionalidad
exports.post_funcionalidad = (request, response, next) => {
const funcionalidad = 
        new Funcionalidad(request.body.nombre, request.body.imagen);
    funcionalidad.save();

    ///////////////////////////////////////////////////////////////////////////////////////
    response.redirect('/poner');
    //////////////////////////////////////////////////////////////////////////////////////

};

exports.get_rootFuncionalidad = (request, response, next) => {
    console.log('Ruta /poner');
    response.render('funcionalidadmuestra', {
        funcionalidad: Funcionalidad.fetchAll(),
    });
}


exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('construcciones', {
        construcciones: Construccion.fetchAll()
    });

}