


console.log("Corriendo Lab10");


const header = `
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
                  <a class="navbar-item" href="/">
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
                    <a class="navbar-item" href="/">
                      Home
                    </a>
              
                    <a class="navbar-item" href="/construir">
                      Construir
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
    `;

const footer = `
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
`;

const construcciones = [{nombre: "casa", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg"}];


const filesystem = require('fs');
const http = require('http');
const fs = require('fs');

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
                var nuevaUrl = currentUrl + 'minecraft'; // Por ejemplo, agregar un parámetro a la URL
          
                // Cambiar la URL
                window.location.href = nuevaUrl;
              });

              document.getElementById('btn2').addEventListener('click', function() {
                // Obtener la URL actual
                var currentUrl = window.location.href;
          
                // Modificar la URL según sea necesario
                var nuevaUrl = currentUrl + 'construir'; // Por ejemplo, agregar un parámetro a la URL
          
                // Cambiar la URL
                window.location.href = nuevaUrl;
              });
            
              document.getElementById('btn3').addEventListener('click', function() {
                // Obtener la URL actual
                var currentUrl = window.location.href;
          
                // Modificar la URL según sea necesario
                var nuevaUrl = currentUrl + 'alterno2'; // Por ejemplo, agregar un parámetro a la URL
          
                // Cambiar la URL
                window.location.href = nuevaUrl;
              });

            
              </script>
    
    </body>
    </html>
    
    `

    );
    response.end();
  
  } 

 





  
  else if (request.url == "/minecraft") {

    response.setHeader('Content-Type', 'text/html');
    response.write(header);
    response.write(`
        <h1 class="title">Hola mundo de Minecraft!</h1>
        <div class="columns">
    `);

    let tarjetas_construcciones = '';
    for(let construccion of construcciones) {


      //esto se encuentra en el metodo get, pero lo ideal seria tenerlo en el post para que se guarde al mandar y no al 
      //regresar a la pag principal
      filesystem.appendFileSync('Lab10.txt', construccion.nombre);
      filesystem.appendFileSync('Lab10.txt', "\n");
      //

      tarjetas_construcciones += `
        <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${construccion.imagen}" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="${construccion.imagen}" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${construccion.nombre}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
            
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
      </div>
      `;
    }
    response.write(tarjetas_construcciones);
    response.write(`</div>`);
    response.write(footer);
    response.end();

  } else if (request.url == "/construir" && request.method == "GET") {

    response.write(header);
    response.write(`
      <h1 class="title">Agregar una construcción</h1>
        <form action="/construir" method="POST">
          <label class="label" for="nombre">Nombre</label>
          <input name="nombre" id="nombre" type="text" class="input"><br>
          <label class="label" for="imagen">Imagen</label>
          <input name="imagen" id="imagen" type="text" class="input"><br><br>
          <input class="button is-success" type="submit" value="Construir">
        </form>
    `);
    response.write(footer);
    response.end();

  } else if (request.url == "/construir" && request.method == "POST") {

    const datos = [];

    //Como el asincronous sort, espera a que deje de recibir datos
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });

    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nombre = datos_completos.split('&')[0].split('=')[1];
        console.log(nombre);
        const imagen = datos_completos.split('&')[1].split('=')[1];
        console.log(imagen);
        construcciones.push({nombre: nombre, imagen: imagen});


        response.write(header);
    response.write(`
      <h1 class="title">Agregar una construcción</h1>
        <form action="/construir" method="POST">
          <label class="label" for="nombre">Nombre</label>
          <input name="nombre" id="nombre" type="text" class="input"><br>
          <label class="label" for="imagen">Imagen</label>
          <input name="imagen" id="imagen" type="text" class="input"><br><br>
          <input class="button is-success" type="submit" value="Construir">
        </form>
    `);
    response.write(footer);
        return response.end();
    });

  }









  else if (request.url == "/alterno") {

    response.write(
      `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Alterno</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
           
        <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>
     
        </body>
    </html>
    `)
    response.end();
  }

  else if (request.url == "/alterno2") {

    response.write(
      `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Alterno</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
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
    `)
    response.end();
  }



  
  else {
    //Código de respuesta para recurso no encontrado
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(  `<!DOCTYPE html>
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
    );
    
    response.end();
  }




});

//escucha, es decir no mata el programa, se recomienda que el canal sea arriba de 1000, preferible el 3000
//ctrl c para matar el servidor
server.listen(3000);