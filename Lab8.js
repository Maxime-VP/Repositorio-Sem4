
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
});

//escucha, es decir no mata el programa, se recomienda que el canal sea arriba de 1000, preferible el 3000
//ctrl c para matar el servidor
server.listen(3000);