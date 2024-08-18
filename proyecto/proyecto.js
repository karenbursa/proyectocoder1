
//mostrarMenu();

const container = document.getElementById("container");

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Carrito guardado:', localStorage.getItem('carrito'));
}



function cerrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.style.display = 'none';
}

document.getElementById('ver-carrito').onclick = visualizarCarrito;

document.getElementById('cerrar-carrito').onclick = cerrarCarrito;


productos.forEach(crearproducto);
