// Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la palabra "total" devolverle el total de la compra.

// Calcular el total de la compra
 function calcularTotalCompra(precios) {
  let total = 0;
  
  // Suma los precios de cada producto
  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }
  
  return total;
}

function pedirPrecios() {
  let precios = [];
  let precio;
  

  do {
    precio = parseFloat(prompt('Ingrese el precio del producto:'));
    
    if (!isNaN(precio)) {
      precios.push(precio);
    }
  } while (!isNaN(precio)); 
  
  return precios;
}

function devolverTotal() {
  console.log('Ingrese los precios de los productos. Cuando termine de ingresar los precios y quiera obtener el total de la compra, escriba "total."');
  
  const precios = pedirPrecios();
  const totalCompra = calcularTotalCompra(precios);
  
  console.log('El total de la compra es:', totalCompra);
}

devolverTotal();