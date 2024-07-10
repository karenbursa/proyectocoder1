let opcion;
alert("Bienvenido a Skincare shop");
opcion = parseInt(prompt("Menú de opciones\n\n1. Ver todos los productos\n2. Mostrar productos con stock\n3. Ver ofertas\n\nPara salir, ingrese 0"));

while (opcion !== 0) {
     opciones(opcion);
    opcion = parseInt(prompt("Menú de opciones\n\n1. Ver todos los productos\n2. Mostrar productos con stock\n3. Ver ofertas\n\nPara salir, ingrese 0"));
}

alert("Gracias por su visita");



function opciones(opcion)
{
    switch (opcion) {
        case 1:
            let mensajeUno = "Todos los productos:\n\ncrema beauty rade ($1200)\nbase liquida sephora ($4000)\nserum acido hialuronico ($5000)\nserum total face ($8000)";
            alert(mensajeUno);
            break;
        case 2:
            let mensajeDos = "Productos en stock:\n\ncrema beauty rade ($1200)\nserum acido hialuronico ($5000)";
            alert(mensajeDos);
            break;
        case 3:
            let mensajeTres = "Productos en oferta:\n\nserum total face ($8000 antes, ahora $4000)";
            alert(mensajeTres);
            break;
        default:
            alert("Opción no válida, por favor intente de nuevo.");
            break;
    };
};