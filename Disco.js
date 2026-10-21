document.getElementById('formRegistro').addEventListener('submit', function(event) {
    

    // Capturamos los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const ciudad = document.getElementById('ciudad').value;
    const sexo = document.getElementById('sexo').value;

    const contenedorMensaje = document.getElementById('resultadoMensaje');
    let mensajeHorario = "";
    let alertaClase = "alert-info";

    // Evaluamos las condiciones de las edades según lo solicitado
    if (edad >= 18 && edad <= 25) {
        mensajeHorario = "Tienes que farrear solo hasta las 22:00 horas.";
        alertaClase = "alert-warning";
    } else if (edad >= 26 && edad <= 35) {
        mensajeHorario = "Horario oficina: Tienes permitido estar hasta las 00:00 horas (12 AM).";
        alertaClase = "alert-primary";
    } else if (edad > 35 && edad <= 45) {
        mensajeHorario = "Tienes permitido estar hasta las 02:00 AM.";
        alertaClase = "alert-success";
    } else if (edad > 45) {
        mensajeHorario = "¡Acceso VIP toda la noche!";
        alertaClase = "alert-danger";
    } else {
        mensajeHorario = "Lo sentimos, debes ser mayor de 18 años para ingresar.";
        alertaClase = "alert-secondary";
    }

    // Mostramos el resultado visualmente en una alerta de Bootstrap
    contenedorMensaje.innerHTML = `
        <div class="alert ${alertaClase} text-center" role="alert">
            <h4 class="alert-heading">¡Registro Exitoso!</h4>
            <p><strong>${nombre}</strong> (${sexo}, ${ciudad}), tienes ${edad} años.</p>
            <hr>
            <p class="mb-0"><strong>${mensajeHorario}</strong></p>
        </div>
    `;
});