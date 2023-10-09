function loginUser() {
    const inicioSesionForm = document.getElementById("inicioSesion");

    inicioSesionForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Obtener los valores del formulario de inicio de sesión
        const identificacionInicio = document.getElementById('identificacion').value;
        const contrasenaInicio = document.getElementById('contrasena').value;

        if (identificacionInicio == "admin" && contrasenaInicio == "admin") {
            alert("Inicio de sesión exitoso");
            window.location.href = "index.html"
        }
        else {
            // Inicio de sesión fallido
            alert("Inicio de sesión fallido. Verifica tus credenciales.");
        }

        // Limpia el formulario
        inicioSesionForm.reset();
    })
}

loginUser()
