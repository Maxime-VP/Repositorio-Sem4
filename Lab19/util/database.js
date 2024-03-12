const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', //base local, si fuera remote se ocupa la ip de la base remota
    user: 'root', //lo ideal es q sea el nombre de usuario que creamos para la base de datos
    database: 'minecraft', //nombre de la base de datos
    password: '5569' //se pone el password de la base de datos
});

module.exports = pool.promise();

