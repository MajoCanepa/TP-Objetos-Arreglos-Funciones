function esPalindromo(cadena) {
  let longitud = cadena.length;
  for (let i = 0; i < longitud / 2; i++) {
    if (cadena[i] !== cadena[longitud - 1 - i]) {
      return false; 
    }
  }
  return true; 
}

// Comprobación
let palabra = 'nadan';
let palabra2 = 'radar';
let palabra3 = 'oso';
console.log(esPalindromo(palabra));
console.log(esPalindromo(palabra2));
console.log(esPalindromo(palabra3));