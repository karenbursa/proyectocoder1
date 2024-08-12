
//mostrarMenu();

const container = document.getElementById("container");

const carrito = JSON.parse(localStorage.getItem('carrito') ?? '[]');
console.log('Carrito cargado:', carrito);

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Carrito guardado:', localStorage.getItem('carrito'));
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
    console.log("Este es tu nuevo carrito", carrito);
}

function crearproducto({ id, nombre, precio, imagen}) {
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
    container.append(card);
}

productos.forEach(crearproducto);
