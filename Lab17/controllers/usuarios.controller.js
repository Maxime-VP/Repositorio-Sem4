//manda al login
exports.get_login = (request, response, next) => {
    
    //request username
    response.render('login', {
        username: request.session.username || '',
    });
};


//manda al home
exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
};


//logout
exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

