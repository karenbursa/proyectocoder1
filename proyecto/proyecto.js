
//mostrarMenu();

const container = document.getElementById("container");

const carrito = JSON.parse(localStorage.getItem('carrito') ?? '[]');
console.log('Carrito cargado:', carrito);

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Carrito guardado:', localStorage.getItem('carrito'));
}


productos.forEach(crearproducto);
