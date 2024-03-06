const express = require('express');
const router = express.Router();

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

router.get('/templates', (request, response, next) => {
    response.write(header);
    response.write(`
      <h1 class="title">¿Qué otros templating engines existen para node?: </h1>
      <div> Además de los populares motores de plantillas como Handlebars y EJS, hay varios otros motores de plantillas disponibles para Node.js. Algunos de ellos incluyen:
      <br>
      Pug (anteriormente conocido como Jade): Es un motor de plantillas de alto rendimiento con una sintaxis concisa y poderosa. Pug permite escribir HTML de forma más eficiente utilizando indentación y mixins.
      <br>
      Mustache.js: Es un sistema de plantillas lógicas sin lógica. No tiene ninguna lógica incorporada y se enfoca en la simplicidad y la legibilidad. Es compatible con una variedad de lenguajes de programación, incluido JavaScript para Node.js.
      <br>
      Nunjucks: Es un motor de plantillas inspirado en Jinja2 para Python. Es potente y flexible, con características como herencia de plantillas, macros, filtros y bloques.
      <br>
      EJS (Embedded JavaScript): Aunque mencionaste EJS en tu pregunta, vale la pena resaltar que es una opción popular y ampliamente utilizada. Permite incrustar JavaScript dentro de las plantillas HTML, lo que lo hace flexible y poderoso.
      <br>
      Marko.js: Desarrollado por eBay, es un motor de plantillas orientado al rendimiento que se puede utilizar tanto en el lado del cliente como en el servidor. Marko.js ofrece características como el pre-renderizado en el lado del servidor y la actualización eficiente del DOM en el lado del cliente.
      <br>
      Hogan.js: Es un motor de plantillas inspirado en Mustache pero con un rendimiento mejorado. Proporciona una sintaxis simple y es compatible con la precompilación de plantillas para un mejor rendimiento en producción. </div>
      <br>
      OpenAI. (2024). "¿Qué otros templating engines existen para node?" [Consulta realizada el 4 de marzo de 2024].
      `);
    response.write(footer);
    response.end();
  });


  router.get('/random2', (request, response, next) => {
    response.write(header);
    response.write(`
      <h1 class="title">URL RANDOM2</h1>
    `);
    response.write(footer);
    response.end();
  });

  router.get('/random3', (request, response, next) => {
    response.write(header);
    response.write(`
      <h1 class="title">URL RANDOM3 </h1>
    `);
    response.write(footer);
    response.end();
  });

  module.exports = router; //poner siempre