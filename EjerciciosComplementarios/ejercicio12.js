//Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si el número es primo o no.

function numPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let numero = parseInt(prompt("Ingrese un número:"));

if (numPrimo(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
} 