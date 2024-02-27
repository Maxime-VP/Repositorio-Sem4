console.log("Hola mundo desde npm");
console.log("Esto es desde el start");
console.log("dentro de la app.js");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


//Las cosas de la ruta deben de ir antes que lo general
app.use('/Construir', (request, response, next) => {
    console.log(request.body)
    response.send('Respuesta de la ruta "/Construir"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send(

        
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
                    Laboratorio 10
                  </p>
                  <p class="subtitle">
                    Maxime Vilcocq Parra A01710550
                  </p>
                </div>
              </section>
        
          </head>
          <body>
          
          <p class="mt-6"></p>
          <p class="mt-6"></p>

          <div style="display: flex; justify-content: center;">
          <div class="level">
          <div class="buttons">
          <p class="px-4"></p>
          
          <button id="btn1" class="button is-primary">Link1</button>
          
          <p class="px-4"></p>
          
          <button id="btn2" class="button is-primary">Link2</button>
          
          <p class="px-4"></p>
          
          <button id="btn3" class="button is-primary">Link3</button>
          
          <p class="px-4"></p>
          </div>
          </div>
          </div>
        
              <script>
              
              document.getElementById("btn1").addEventListener("mouseover", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn1")
                myBTN.classList.remove("is-primary");
                myBTN.style.fontFamily = "Arial, sans-serif";
                }
              );
              document.getElementById("btn1").addEventListener("mouseout", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn1")
                myBTN.classList.add("is-primary");
                myBTN.style.fontFamily = "Verdana, sans-serif"; 
                // Cambia la fuente del texto
                }
              );
            
              document.getElementById("btn2").addEventListener("mouseover", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn2")
                myBTN.classList.remove("is-primary");
                myBTN.style.fontFamily = "Arial, sans-serif";
                }
              );
              document.getElementById("btn2").addEventListener("mouseout", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn2")
                myBTN.classList.add("is-primary");
                myBTN.style.fontFamily = "Verdana, sans-serif"; 
                // Cambia la fuente del texto
                }
              );

              document.getElementById("btn3").addEventListener("mouseover", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn3")
                myBTN.classList.remove("is-primary");
                myBTN.style.fontFamily = "Arial, sans-serif";
                }
              );
              document.getElementById("btn3").addEventListener("mouseout", function() {
                // Cambia el color del texto cuando el cursor pasa por encima
                var myBTN = document.getElementById("btn3")
                myBTN.classList.add("is-primary");
                myBTN.style.fontFamily = "Verdana, sans-serif"; 
                // Cambia la fuente del texto
                }
              );


              document.getElementById('btn1').addEventListener('click', function() {
                // Obtener la URL actual
                var currentUrl = window.location.href;
          
                // Modificar la URL según sea necesario
                var nuevaUrl = currentUrl + 'construir'; // Por ejemplo, agregar un parámetro a la URL
          
                // Cambiar la URL
                window.location.href = nuevaUrl;
              });
            
            
              </script>
    
    </body>
    </html>
    
    `

    ); //Manda la respuesta
});

app.listen(3001);
