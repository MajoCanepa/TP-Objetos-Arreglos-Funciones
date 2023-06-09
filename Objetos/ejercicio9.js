let persona = {
  nombre: "Maria José",
  edad: 29,
  profesion: "Contadora Pública",
};
// Presentación 
function presentarPersona(persona) {
  console.log("Hola, me llamo: " + persona.nombre);
  console.log("Edad: " + persona.edad);
  console.log("Profesión: " + persona.profesion);
}

presentarPersona(persona);