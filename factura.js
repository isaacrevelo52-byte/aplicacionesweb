// 1. CAPTURAR EL EVENTO DEL BOTON
document.getElementById("btnAgregarProducto").addEventListener("click", agregarFila);

function agregarFila() {
    let producto = document.getElementById("producto").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);

    // Hacer el cálculo llamando a la función
    let subtotal = calcularSubtotal(cantidad, precio);

    const filaNueva = document.createElement("tr");
    filaNueva.innerHTML = `
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${subtotal}</td>
    `;

    // 4. Agregar la fila a la tabla
    document.getElementById("detalleFactura").appendChild(filaNueva);
}

// Faltaba declarar esta función
function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}