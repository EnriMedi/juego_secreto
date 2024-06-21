//let numeroSecreto = 4;
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
let maximoIntentos = 6;


console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
  let numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

  console.log(typeof(numeroUsuario));
  console.log(typeof(numeroSecreto));

  if (numeroUsuario == numeroSecreto) {
    //Es verdadera la condicion
    //alert('Acertaste el numero:'+ numeroUsuario);
    //alert(`Acertaste el numero ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    alert(
      `Acertaste el numero ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
    break;
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      //Es falsa la condicion
      alert("El numero secreto es mayor");
    }
    //Incremento cuando no aciertya1
    //intentos = intentos + 1;
    intentos++;
    // palabraVeces = 'veces';
    if (intentos > maximoIntentos) {
      alert(`Legaste al numero maixo de intentos ${maximoIntentos} intentos`);
      break;
    }
  }
}

/*if (numeroUsuario > 10 ){
    alert('El numero es mayor a 10');
    }
     else{
        ('el numero es menos a 10');
     }
     */

//alert('Hola como estas'); Escribir impresion.

/*HOLA COMO ESTAS */

//Tipo de varibales
//let
//const
///var
///Math.floor(Math.random()*10); para pasarlo a entero y que sea de 1 a 10