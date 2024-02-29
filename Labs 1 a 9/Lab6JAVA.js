document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    var password = document.getElementById("password").value;
    
    // Expresión regular para validar la contraseña (mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial)
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    
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