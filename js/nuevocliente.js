import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(function () {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      //this.nombre,.email,etc...
      nombre,
      email,
      telefono,
      empresa,
    };

    if (validar(cliente)) {
      //mostrar mensaje
      mostrarAlerta("Todos los campos son oobligatorios");
      return;
    }
    // console.log("Si se paso la validacion");
    nuevoCliente(cliente);
  }

  function validar(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
