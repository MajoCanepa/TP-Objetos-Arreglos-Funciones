function obtenerPares(arreglo){
  let pares = [];
  
  for (let i = 0; i < arreglo.length; i++){
    let numero = arreglo[i];
    if (numero % 2 === 0) {
      pares.push(numero);
    } 
  }
  return pares; 
}
//Comprobación
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let pares = obtenerPares(numeros);
console.log(pares); 