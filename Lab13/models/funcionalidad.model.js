const funcionalidad = [
    {
        nombre: "Jordan 1", 
        imagen: "https://sneakerholicvietnam.vn/wp-content/uploads/2020/08/4292f322c44119ad8fc184c8fea09849-scaled-2.jpg",
    }
];
module.exports = class Funcionalidad {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        funcionalidad.push(this);

    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return funcionalidad; //regresa el arreglo de todo lo que contenga funcionalidad
    }
}