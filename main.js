const clave = document.getElementById("clave");
const nombre = document.getElementById("name");
const apellido1 = document.getElementById("apPatr");
const apellido2 = document.getElementById("apMatr");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe solo
    // Validar campos vacíos
    if (clave.value === "" || nombre.value === "" || apellido1.value === "" || apellido2.value === "") {
        alert("Por favor, complete todos los campos.");
        return;
    } else {
        // Validar clave positiva
        if (clave.value <= 0) {
            alert("La clave debe ser un número positivo mayor a 0.");
            return;
        } else {
            // Validar que nombre y apellidos sean texto (solo letras)
            const soloLetras = /^[A-ZÁÉÍÓÚÑ ]+$/i;
            if (!soloLetras.test(nombre.value) ||
                !soloLetras.test(apellido1.value) ||
                !soloLetras.test(apellido2.value)) {
                alert("Nombre y apellidos solo deben contener letras.");
                return;
            }
            // Validar mayúsculas
            if (nombre.value !== nombre.value.toUpperCase() ||
                apellido1.value !== apellido1.value.toUpperCase() ||
                apellido2.value !== apellido2.value.toUpperCase()) {
                alert("Nombre y apellidos deben estar en mayúsculas.");
                return;
            }
        }
    }
    alert("Formulario enviado correctamente.");
});