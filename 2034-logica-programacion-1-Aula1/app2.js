alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = alert("¡Error! Completa todos los campos");

let nombreUsuario = prompt("Ingrese su nombre");
let edadUsuario = prompt("Ingrese su edad");
console.log(nombreUsuario);

hola();

function hola() {
  if (edadUsuario >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
  } else {
    alert("No puedes obtener tu licencia de conducir!");
  }
}
