function esMayorEdad(persona) {
  let edad = persona.edad;
  
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

//Comprobación
let persona1 = { edad: 30 };
console.log(esMayorEdad(persona1)); //valor verdadero

let persona2 = { edad: 15 };
console.log(esMayorEdad(persona2)); //valor falso