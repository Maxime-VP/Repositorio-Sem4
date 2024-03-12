// const construcciones = [{nombre: "Casa de Minecraft", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg"}];
//remplazamos arreglo por base de datos

const db = require('../util/database');

// db.execute('Consulta SQL por ejemplo: SELECT * FROM mi_tabla');



module.exports = class Construccion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre
        this.imagen = mi_imagen
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO construccion (nombre, imagen, username) VALUES (?, ?, "Maxime")',
            [this.nombre, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
         return db.execute('SELECT * FROM construccion');
    }

    
    static fetchOne(id) {
        return db.execute('SELECT * FROM construccion WHERE id=?', 
            [id]);
    }
    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}

