
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

//preentrega con coreccion 
// Función para crear un producto 
function crearproducto({ id, nombre, precio, imagen }) {
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
        alert(`Añadido al carrito: ${nombre}`);
    };

    card.append(titulo, imagenElement, precioElement, botonAgregar);
    document.getElementById('container').append(card);
}

//  agregar un producto al carrito
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
    console.log("Este es tu nuevo carrito", carrito);
}


// visualizar el carrito
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
        precioElement.innerText = `Precio total: $${(producto.precio * producto.cantidad)}`; //calculo el total

        productoElement.append(nombreElement, cantidadElement, precioElement);
        carritoLista.append(productoElement);
    });

    // Mostrar el contenedor del carrito
    carritoContainer.style.display = 'block'; //el block es para mostrarlo como un bloque 
}

