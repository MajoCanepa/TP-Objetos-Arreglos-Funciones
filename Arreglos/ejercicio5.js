function obtenerSuma(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

// Comprobación
const arreglo = [56,6 ,38 ,12 ,29, 60];
const resultado = obtenerSuma(arreglo);
console.log(resultado); 