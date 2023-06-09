//Crear un programa que convierta la temperatura de grados Celsius a Faranheit y viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere convertir.

// Celsius a Fahrenheit
function celsiusFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
// Fahrenheit a Celsius
   function fahrenheitCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  let temperatura = parseFloat(prompt("Ingrese la temperatura a convertir:"));
  let unidad = prompt("Ingrese la unidad de temperatura (Celsius o Fahrenheit):").toLowerCase();
  
  if (unidad === "celsius") {
    let fahrenheit = celsiusFahrenheit(temperatura);
    console.log(temperatura + " grados Celsius equivale a " + fahrenheit + " grados Fahrenheit.");
  } else if (unidad === "fahrenheit") {
    let celsius = fahrenheitCelsius(temperatura);
    console.log(temperatura + " grados Fahrenheit equivale a " + celsius + " grados Celsius.");
  } else {
    console.log("Unidad de temperatura inválida. Por favor, ingrese 'Celsius' o 'Fahrenheit'.");
  } 