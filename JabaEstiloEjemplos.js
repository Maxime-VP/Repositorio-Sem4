console.log ("Esto es un log")
console.info("Esto es info")
console.warn("Esto es una advertencia")
console.error("Esto es un error")

//forma antigua de declarar variables
var Vari = 1;

//Constantes
const Constante =42;

//Forma moderna y más segura de declarar variables
let cantidad = 1;

alert("Alerta");

const nombre = prompt("¿Como te llamas?");
console.log("hola " + nombre);

const hambre = confirm("¿Confirmas?");
if(hambre){
    console.log("Confirmaste");
} else{
    console.log("No confirmas");
}

// triple === compara todo

//funciones
function construir(){
    console.log("Construyendo casa");
}

construir();

//funciones modernas
const casa = () => {
    console.log("Construyendo casa anónima")
};

casa();
const desayuno = (comida) => {
    console.log("El desayuno es " + comida)
};

desayuno("huevito");


// declarar arreglos
const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro Elemento");
arreglo.push(5);

arreglo[10] = "Uno más";

//arreglos asosiativos
arreglo["dos"] = 8;

console.log(arreglo);

//recorrer tradicionalmente arreglo
for (let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

//recorrido alternativo
for(let posicion in arreglo){
    console.log(posicion);
}


//Objetos

const objeto = {atributos: "valor", atributo2:"valor2"};
objeto.atributo3 = 5;
console.log(objeto);

for(let atributo in objeto) {
    console.log(atributo)
}

//modificar html
document.write("Hola");