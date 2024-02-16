
// Solicita al usuario un número mediante un prompt

function entrada1(){
    var numero = parseInt(prompt("Por favor ingresa un número para ejercicio 1:"));
    if (isNaN(numero)) {
        prompt("¡Por favor ingresa un número válido!");
        entrada1()
    }
    else {
        document.write("<h1> Laboratorio 3 </h1>")
        document.write("<h2>Ejercicio 1 <br></h2>");

        document.write("<table border='1'>"); //abre la tabla

        document.write("<tr><th> Número </th>   <th> Cuadrado </th>    <th> Cubo </th></tr>");
        
        for (let i = 1; i <= numero; i++) {
            document.write("<tr>"); //abre renglon
            document.write("<td>" + i + "</td>");
            document.write("<td>" + (i * i) + "</td>");
            document.write("<td>" + (i * i * i) + "</td>");
            document.write("</tr>"); //termina renglon
        }
        
        // Cierra la tabla
        document.write("</table>"); //cierra la tabla
        
    }
}
entrada1();


function entrada2(){
    
    // Genera dos números aleatorios entre 1 y 100
var num1 = Math.floor(Math.random() * 100) + 1;
var num2 = Math.floor(Math.random() * 100) + 1;

// Calcula la suma de los dos números generados
var sumaCorrecta = num1 + num2;

// Solicita al usuario el resultado de la suma mediante un prompt
var inicioTiempo = new Date(); //marca el inicio
var respuestaUsuario = parseInt(prompt("Por favor ingresa el resultado de la suma de " + num1 + " + " + num2));

// Calcula el tiempo transcurrido
var finTiempo = new Date(); //marca el fin
var tiempoTranscurrido = (finTiempo - inicioTiempo) / 1000; // Resta el inicio del fin y cambia el valor a segundos

// Verifica si la respuesta del usuario es correcta
document.write("<h2>Ejercicio 2 <br></h2>");

if (respuestaUsuario === sumaCorrecta) {
    document.write("¡Respuesta correcta! <br>");
} else {
    document.write("Respuesta incorrecta. La respuesta correcta era: " + sumaCorrecta + "<br>");
}

// Muestra el tiempo que tardó el usuario en escribir la respuesta
document.write("Tiempo transcurrido: " + tiempoTranscurrido + " segundos");
}
entrada2();



function contador(arreglo) {
    // Inicializa contadores para cada tipo de valor
    let negativos = 0;
    let ceros = 0;
    let mayoresACero = 0;

    // Itera sobre el arreglo
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] === 0) {
            ceros++;
        } else {
            mayoresACero++;
        }
    }

    //crea un objeto para regresar todos los valores en un solo return
    let resultados = {
        negativos: negativos,
        ceros: ceros,
        mayoresACero: mayoresACero
    };

    return resultados;
}

let arreglo = [3, -5, 0, 7, -2, 0, 10]; //arreglo

contador(arreglo);
let resultados = contador(arreglo);

document.write("<h2>Ejercicio 3 <br></h2>");

document.write("Arreglo usado: " + arreglo);
document.write("<br><br>Cantidad de números negativos :" + resultados.negativos);
document.write("<br>Cantidad de ceros: " + resultados.ceros);
document.write("<br>Cantidad de valores mayores a cero: " + resultados.mayoresACero);



function promedios(matriz) {
    let promediosArray = []; // Arreglo para almacenar los promedios

    // Itera sobre cada fila de la matriz
    for (let fila of matriz) { //asigna como fila los elementos de la matriz, es decir cada (lista) de la matriz
        let suma = 0;
        // Calcula la suma de los elementos de la fila
        for (let num of fila) { //asigna como num a cada elemento de la fila (lista) y los suma
            suma += num;
        }
        // Calcula el promedio de la fila y lo agrega al arreglo de promedios
        let promedio = suma / fila.length;
        promediosArray.push(promedio);
    }

    return promediosArray; //regresa el arreglo de promedios
}

let matriz = [
    [1, 2, 3, 4],
    [4, 5, 6],
    [7, 8, 9, 9, 10]
];

let promediosResultantes = promedios(matriz);

document.write("<h2>Ejercicio 4 <br></h2>");

document.write("Matriz:<br>")
document.write("<br>" + matriz[0]) //muestra la matriz por filas
document.write("<br>" + matriz[1])
document.write("<br>" + matriz[2])
document.write("<br><br>Promedios de cada fila: ", promediosResultantes.join(",  "));


function inverso(numerorev) {
    // Convertir el número a cadena para poder manipular sus dígitos
    let cadenaNumero = numerorev.toString();
    // Dividir la cadena en un arreglo de caracteres
    let arregloDigitos = cadenaNumero.split("");
    // Invertir el orden de los dígitos en el arreglo
    let arregloInvertido = arregloDigitos.reverse();
    // Unir los dígitos invertidos en una cadena
    let cadenaInvertida = arregloInvertido.join("");
    // Convertir la cadena invertida de nuevo a número
    
    // Devolver el número invertido

    return cadenaInvertida;

    //El sig codigo regresa el numero como entero lo que hace que si el ultimo digito era 0, no lo va a regresar
    //let numeroInvertido = parseInt(cadenaInvertida);
    //return numeroInvertido;


}

function entradarev() {
var numerorev = parseInt(prompt("Por favor ingresa un número para ejercicio 5 invertir:"));
    if (isNaN(numerorev)) {
        prompt("¡Por favor ingresa un número válido!");
        entradarev()
    }
    else {

        let numeroInvertido = inverso(numerorev);

        document.write("<h2>Ejercicio 5 <br></h2>");
        document.write("Número original: ", numerorev);
        document.write("<br>Número con sus dígitos en orden inverso: ", numeroInvertido);
    }

}

entradarev();


// Define el objeto CalculadoraPropinas

let CalculadoraPropinas = {

    // Constructor del objeto
    crearCalculadora: function(costoComida, porcentajePropina) {
        return {
            costoComida: costoComida,
            porcentajePropina: porcentajePropina,
            
            
            // Método para calcular el monto total a pagar incluyendo la propina
            calcularTotal: function() {
                let propina = (this.costoComida * this.porcentajePropina) / 100;
                let totalAPagar = this.costoComida + propina;
                return totalAPagar;
            },

            // Método para imprimir el detalle del pago
            imprimirDetallePago: function() {
                let totalAPagar = this.calcularTotal();

                document.write("<h2>Ejercicio 6 <br></h2>");
                document.write("<h3> Calculadora de total con propina </h3>")

                document.write("Costo de la comida: $" + this.costoComida);
                document.write("<br>Porcentaje de propina: " + this.porcentajePropina + "%");
                document.write("<br>Monto de propina: $ " + ((this.costoComida * this.porcentajePropina) / 100));
                document.write("<br>Total a pagar (incluyendo propina): $" + totalAPagar);
            }
        };
    }
};


function entradacalc() {
    var numerorev = parseInt(prompt("Por favor ingresa un número para ejercicio 5 invertir:"));
        if (isNaN(numerorev)) {
            prompt("¡Por favor ingresa un número válido!");
            entradarev()
        }
        else {
    
            let numeroInvertido = inverso(numerorev);
    
            document.write("<h2>Ejercicio 5 <br></h2>");
            document.write("Número original: ", numerorev);
            document.write("<br>Número con sus dígitos en orden inverso: ", numeroInvertido);
        }
    
    }


let miCalculadora = CalculadoraPropinas.crearCalculadora(50, 15);
miCalculadora.imprimirDetallePago(); // Imprime el detalle del pago


/*
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

*/