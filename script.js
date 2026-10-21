let nombre = "Estudiante";
let edad = 20;

alert("Hola, soy: " + nombre + " y tengo " + edad + " años");

// Suma de números
let num1 = Number(prompt("Ingresa número 1"));
let num2 = Number(prompt("Ingresa número 2"));
let num3 = Number(prompt("Ingresa número 3"));

var suma = num1 + num2 + num3;

console.log("La suma es: " + suma);

// Mostrar resultado en HTML
const resultado = document.getElementById("resultado");
resultado.textContent = "La suma es: " + suma;