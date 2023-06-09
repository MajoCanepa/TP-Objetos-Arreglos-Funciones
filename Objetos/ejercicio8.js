let producto = {
  nombre: 'Zapatillas',
  precio: 5000,
  cantidad: 4
};

function calcularTotal(producto) {
  let total = producto.precio * producto.cantidad;
  return total;
}

let totalPagar = calcularTotal(producto);
console.log('Total a pagar:', totalPagar);