function esMayorEdad(edad) {
  let esMayor = false;
  
  if (edad >= 18) {
    return true;
  }
  
  return false;
}

// Comprobación
let edad1 = 20;
let edad2 = 15;

console.log(esMayorEdad(edad1)); // true
console.log(esMayorEdad(edad2)); // false