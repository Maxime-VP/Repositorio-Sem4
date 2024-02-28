console.log("Hola mundo desde npm");
console.log("Esto es desde el start");
console.log("dentro de la app.js");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const construcciones = [
    {
        nombre: "casa",
        imagen: "ruta",
    }
];



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

// checar qpex con esto, es lo que usa para publicar cosas en la principal
app.post(`/construir`,(request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect(`/`)

});

app.get(`/`,(request, response, next) => {
    console.log('Otro middleware!');
    response.send(`

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


app.use((request, response, next) => {
    response.status(404);
    response.send(

        `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Error</title>
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
                        <h1 class="title">Error 404 Página no encontrada</h1>
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
        `

    )
});


app.listen(3001);
