// Funciones requeridas
function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

function calcularIVA(subtotalGeneral) {
    return subtotalGeneral * 0.15;
}

// Acumulador global
let acumuladorSubtotal = 0;

document.getElementById("btnAgregarProducto").addEventListener("click", function() {
    let producto = document.getElementById("producto").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);

    // Validar que no estén vacíos
    if (!producto || isNaN(cantidad) || isNaN(precio)) {
        return;
    }

    let subtotalFila = calcularSubtotal(cantidad, precio);

    // Agregar fila a la tabla
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${subtotalFila}</td>
    `;
    document.getElementById("detalleFactura").appendChild(fila);

    // Actualizar acumulador y totales
    acumuladorSubtotal += subtotalFila;
    let iva = calcularIVA(acumuladorSubtotal);
    let totalPagar = acumuladorSubtotal + iva;

    // Mostrar en pantalla usando innerText (evita que se pueda escribir)
    document.getElementById("lblSubtotal").innerText = acumuladorSubtotal;
    document.getElementById("lblIva").innerText = iva;
    document.getElementById("lblTotalPagar").innerText = totalPagar;

    // Limpiar campos de producto
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
});