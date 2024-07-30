
function obtenerListaProductos() {
    return productos.map(p => `${p.nombre} ($${p.Precio})`).join('\n');
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
