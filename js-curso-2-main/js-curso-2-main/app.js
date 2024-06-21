let texto = document.querySelector('h1');
texto.innerHTML = 'Hora del Desafío';

function consola(){
console.log("El botón fue clicado");
}

function alerta(){
    alert('Yo amo JS');
}

function promta(){
     nombreCuidad = prompt('Nombre de una cuidad en brasil');
    alert(`Estuve en ${nombreCuidad} y me acrode de ti `); 

}

function Suma(){
    let numero1 =parseInt(prompt('Introducir un numero'));
    let numero2 =parseInt(prompt('Introducir otro numero'));

    alert(numero1+numero2);
}

