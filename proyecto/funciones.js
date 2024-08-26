
function obtenerListaProductos(minPrecio = 0, maxPrecio = 100000) { //agregue lo de la correccion, pongo rangos para mostrar precios y filtrar
    return productos
        .filter(p => p.Precio >= minPrecio && p.Precio <= maxPrecio) //si el precio es mayor o igual  a min y menor o igual a max lo muestra
        .map(p => `${p.nombre} ($${p.Precio})`)
       .join('\n'); //salto de linea para que quede visualmente mejor 
}


function mostrarMenu() {
    alert("Bienvenido a Skincare shop");

    let opcion = parseInt(prompt("Menú de opciones\n\n1. Ver todos los productos\n2. Mostrar productos con stock\n3. Ver ofertas\n\nPara salir, ingrese 0"));

    while (opcion !== 0) {
        opciones(opcion);
        opcion = parseInt(prompt("Menú de opciones\n\n1. Ver todos los productos\n2. Mostrar productos con stock\n3. Ver ofertas\n\nPara salir, ingrese 0"));
    }

    alert("Gracias por su visita");
}

function opciones(opcion) {
    switch (opcion) {
        case 1:
            alert(`Todos los productos:\n\n${obtenerListaProductos()}`);
            break;
        case 2:
        
            alert(`Productos en stock:\n\n${obtenerListaProductos()}`);
            break;
        case 3:
           
            alert("Productos en oferta:\n\nCrema anti-age ($8500 antes, ahora $4250)");
            break;
        default:
            alert("Opción no válida, por favor intente de nuevo.");
            break;
    }
}

//final boss

function obtenerProductos() {
    console.log("los productos se cargaron ");
    fetch('produ.json') 
        .then(response => {//logica para cargar correctamente los productos 
            if (!response.ok) {
                throw new Error('Error al cargar los productos');
            }
            return response.json(); 
        })
        .then(data => {
            data.forEach(producto => {
                crearProducto(producto);
            });
        })
        .catch(error => console.error('Error:', error));
}

function crearProducto({ id, nombre, precio, imagen }) {
    const card = document.createElement("div");
    card.className = "card";
    
    const titulo = document.createElement("h2");
    titulo.innerText = nombre;
    
    const imagenElement = document.createElement("img");
    imagenElement.src = imagen;
    imagenElement.className = "img";

    const precioElement = document.createElement("p");
    precioElement.innerText = `$${precio}`;

    const botonAgregar = document.createElement("button");
    botonAgregar.innerText = "Añadir al carrito";
    botonAgregar.onclick = () => {
        agregarAlCarrito({ id, nombre, precio });
        Swal.fire({
            title: 'Producto añadido',
            text: 'El producto ha sido añadido al carrito',
            icon: 'success',  
            confirmButtonText: 'Aceptar'
        });
    };

    card.append(titulo, imagenElement, precioElement, botonAgregar);
    container.append(card);
}


function agregarAlCarrito(producto) {
    const indexProducto = carrito.findIndex(el => el.id === producto.id);

    if (indexProducto >= 0) {
        carrito[indexProducto].cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
        });
    }

    guardarCarrito();
}

// Guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function visualizarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = ''; // Limpiar contenido anterior

    carrito.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.className = 'producto-en-carrito';

        const nombreElement = document.createElement('h3');
        nombreElement.innerText = producto.nombre;

        const cantidadElement = document.createElement('p');
        cantidadElement.innerText = `Cantidad: ${producto.cantidad}`;

        const precioElement = document.createElement('p');
        precioElement.innerText = `Precio total: $${(producto.precio * producto.cantidad)}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.innerText = 'Eliminar';
        botonEliminar.onclick = () => {
            eliminarDelCarrito(producto.id);
        };

        productoElement.append(nombreElement, cantidadElement, precioElement, botonEliminar);
        carritoLista.append(productoElement);
    });

    carritoContainer.style.display = 'block'; // Mostrar el carrito

}

function eliminarDelCarrito(idProducto) {
    const indexProducto = carrito.findIndex(el => el.id === idProducto);

    if (indexProducto >= 0) {
        carrito.splice(indexProducto, 1);
        guardarCarrito();
        visualizarCarrito();
    }
    Swal.fire({
        title: 'Producto eliminado',
        text: 'El producto ha sido eliminado del carrito',
        icon: 'error', 
        confirmButtonText: 'Aceptar'
    });
}

function cerrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.style.display = 'none'; // Ocultar el carrito
}

// Cargar carrito y productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
    obtenerProductos();
});

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado); // Actualizar el carrito con los datos guardados
    }
}

function finalizarCompra() {
    const medioPagoContainer = document.getElementById('medio-pago-container');
    medioPagoContainer.style.display = 'block'; 
}

// Pagar (sin logica de pago )
function procesarPago() {
    const medioPago = document.getElementById('medio-pago').value;
    Swal.fire({
        title: 'Compra finalizada',
        text: `El pago se realizó con éxito.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    // Limpiar el carrito y ocultar el carrito simulando ques e procesa la operacion 
    carrito = [];
    guardarCarrito();
    visualizarCarrito();
    cerrarCarrito();
}
