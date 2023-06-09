function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}

//Comprobación

let base = 7;
let altura = 4;
let areaRectangulo = calcularAreaRectangulo(base, altura);
console.log("El área del rectángulo es: " + areaRectangulo);