/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";
*/
/*
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemeto(elemento, texto) {
  let elemtoHTML = document.querySelector(elemento);
  elemtoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  //let numeroDeUsuario = document.querySelector("input");
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(typeof numeroDeUsuario);
  console.log(numeroDeUsuario);
  console.log(typeof numeroSecreto);
  console.log(numeroSecreto);
  console.log(numeroDeUsuario === numeroSecreto);
  //=== VALOR EN TIPO DE DATO TAMBIEN

  return;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemeto("h1", "Numero secreto");
asignarTextoElemeto("p", "Indica un numero del 1 al 100"); */

numero1 = parseInt(prompt("Escribe el Primero numero"));
numero2 = parseInt(prompt("Escribe el Segundo numero"));
numero3 = parseInt(prompt("Escribe el Tercero numero"));
resultado = multiplicacion();

console.log(resultado);
function multiplicacion() {
  return numero1 * numero2 * numero3;
}
