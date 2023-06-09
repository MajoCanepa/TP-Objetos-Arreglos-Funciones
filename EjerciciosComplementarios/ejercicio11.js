// Crear un programa que pida al usuario que ingrese un número y le devuelva un mensaje indicando si el número es positivo, negativo o si es 0. 

function conocerSigno(numero) {
  if (numero > 0) {
    return "El número ingresado es positivo.";
  } else if (numero < 0) {
    return "El número ingresado es negativo.";
  } else {
    return "El número ingresado es 0.";
  }
}

let numero = parseFloat(prompt("Ingresa un número:"));
let resultado = conocerSigno(numero);
console.log(resultado); 