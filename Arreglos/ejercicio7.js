function obtenerMaximo(numeros) {
  let maximo = numeros[0];
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  return maximo;
}
//Comprobación

const arregloNumeros = [5, 24, 14, 9, 1, 42, 38];
const maximoNumero = obtenerMaximo(arregloNumeros);
console.log(maximoNumero);