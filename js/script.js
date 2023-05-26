// Obtenemos los elementos del HTML por su id
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var sumar = document.getElementById("sumar");
var restar = document.getElementById("restar");
var multiplicar = document.getElementById("multiplicar");
var dividir = document.getElementById("dividir");
var resultado = document.getElementById("resultado");

// Definimos las funciones que realizan las operaciones
function sumarNumeros() {
    // Obtenemos los valores de los inputs y los convertimos a números
    var a = Number(num1.value);
    var b = Number(num2.value);
    // Calculamos la suma y la mostramos en el párrafo del resultado
    var suma = a + b;
    resultado.textContent = "La suma es " + suma;
}

function restarNumeros() 
    // Obtenemos los valores de los inputs y los convertimos a números