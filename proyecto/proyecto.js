
//mostrarMenu();


const container = document.getElementById("container");

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.getElementById('ver-carrito').onclick = visualizarCarrito;
document.getElementById('cerrar-carrito').onclick = cerrarCarrito;
document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra);
document.getElementById('pagar').addEventListener('click', procesarPago);
