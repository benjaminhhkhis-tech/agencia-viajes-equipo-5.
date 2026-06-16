const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const servicio = document.querySelector('select[name="servicio"]').value;

    alert(
        "Registro exitoso\n\n" +
        "Nombre: " + nombre + "\n" +
        "Correo: " + correo + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Servicio: " + servicio
    );

    formulario.reset();
});