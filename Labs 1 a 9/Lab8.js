
//Trabajé con María José Gaytán en computadoras diferentes
//coment

console.log("Hola mundo desde node");

const { log } = require('console');
//fs es el modulo para manipular el sistema de archivos
const filesystem = require('fs');

//escribe el string del segundo parametro en el archivo indicado en el primer parámetro
filesystem.writeFileSync('Hola.txt', 'Hola desde node');


const te_hackie =() =>{
    console.log('jojo te hackie')
}

setTimeout(te_hackie,7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000];

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

console.log('En que momento se imprime esto -> al comienzo');

//http es un modulo de node con todas las funciones de un servidor web
const http = require('http');

const server = http.createServer((request, response) => {


    console.log(request.url);

    if (request.url == "/") {

    response.setHeader('Content-Type','text/html');
    response.write(

        `

        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Validar contraseña</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            
        
            <section class="hero is-primary">
                <div class="hero-body">
                  <p class="title">
                    Validación de Password
                  </p>
                  <p class="subtitle">
                    Maxime Vilcocq Parra A01710550
                  </p>
                </div>
              </section>
        
          </head>
          <body>
          
        
            <form id="passwordForm" class="box">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="********">
                <button class="button " id="btn" type="submit">Validar</button>
              </form>
        
        
              <span class="icon-text has-text-info">
                <span class="icon">
                  <i class="fas fa-info-circle"></i>
                </span>
                <span id="Info">Info</span>
              </span>
              
              <p id="info" class="block"></p>
        
        
        
              <section id="mysection" class="hero is-primary">
                <div class="hero-body">
                  <p id="message" class="subtitle">
                    
                  </p>
                </div>
              </section>
              
              <script>
              
              document.getElementById("passwordForm").addEventListener("submit", function(event) {
                event.preventDefault(); // Evita que el formulario se envíe
                
                var password = document.getElementById("password").value;
                
                // Expresión regular para validar la contraseña (mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial)
                var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?#&])[A-Za-z\\d@$!%*?#&]{8,}$/;
                
                if (regex.test(password)) {
                  document.getElementById("message").innerText = "La contraseña es válida";
                  document.getElementById("message").style.color = "green";
            
                  var mySection = document.getElementById("mysection");
                  // Remueve la clase actual
                     mySection.classList.remove("is-warning");
                     // Agrega la nueva clase
                     mySection.classList.add("is-primary");
            
            
                } else {
                  document.getElementById("message").innerText = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial";
                  document.getElementById("message").style.color = "red";
            
                
                  var mySection = document.getElementById("mysection");
                 // Remueve la clase actual
                    mySection.classList.remove("is-primary");
                    // Agrega la nueva clase
                    mySection.classList.add("is-warning");
                }
            
              });
            
              document.getElementById("btn").addEventListener("mouseover", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn")
                myBTN.classList.add("is-primary");
                myBTN.style.fontFamily = "Verdana, sans-serif"; 
                // Cambia la fuente del texto
            
              });
            
              document.getElementById("btn").addEventListener("mouseout", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn")
                myBTN.classList.remove("is-primary");
                myBTN.style.fontFamily = "Arial, sans-serif";
                }
              );
            
              document.getElementById("Info").addEventListener("mouseover", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var InfoTXT = document.getElementById("Info")
                InfoTXT.innerText = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial";
                // Cambia la fuente del texto
            
              });
            
              document.getElementById("Info").addEventListener("mouseout", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var InfoTXT = document.getElementById("Info")
                InfoTXT.innerText = "Info";
                // Cambia la fuente del texto
            
              });

              </script>
    
    </body>
    </html>
    
    `

    );
    response.end();
  
  } else if (request.url == "/construir") {
  } else {
    //Código de respuesta para recurso no encontrado
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Minecraft</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27Ahugh_giimXgC5jzZNAIdsZGxqjA-bvxw-4gRbBfF8evxX2rYwG4eI_fRiurOTiZ_c&usqp=CAU" width="112" height="28">
                  </a>
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <a class="navbar-item">
                      Home
                    </a>
              
                    <a class="navbar-item">
                      Documentation
                    </a>
              
                    <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                        More
                      </a>
              
                      <div class="navbar-dropdown">
                        <a class="navbar-item">
                          About
                        </a>
                        <a class="navbar-item">
                          Jobs
                        </a>
                        <a class="navbar-item">
                          Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                          Report an issue
                        </a>
                      </div>
                    </div>
                  </div>
              
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-primary">
                          <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            <section class="section">
                <div class="container">
                    <h1 class="title">Ups, la aldea que estás buscando no existe.</h1>
                </div>
            </section>
            <footer class="footer">
                <div class="content has-text-centered">
                  <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                  </p>
                </div>
              </footer>
        </body>
    </html>
    `);
    
    response.end();
  }




});






//escucha, es decir no mata el programa, se recomienda que el canal sea arriba de 1000, preferible el 3000
//ctrl c para matar el servidor
server.listen(3000);



const arreglo2 = [20,30,40,10,7,7,7,1000];

const promedio =() =>{

    let suma= 0;
    let count=0;

    for (let count in arreglo2){
        suma=suma + arreglo2[count];
    };
    console.log("Ejercicio1")
    console.log(suma/arreglo2.length);
}

promedio();
    
const string = "Messi es el mejor jugador del mundo";
const ejercicio2 = () => {
  const filesystem = require("fs");
  filesystem.writeFileSync("Ejercicio 2.txt", string);
}

ejercicio2();

