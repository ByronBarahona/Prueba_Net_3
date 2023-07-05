$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        // Realizar la validación del inicio de sesión aquí

        // Ejemplo: Validación básica
        if (username === "admin" && password === "12345") {
            // Inicio de sesión válido, redireccionar
            window.location.href = "/Home/Index";
        } else {
            // Mostrar mensaje de error
            $(".error-message").show().text("Nombre de usuario o contraseña incorrectos.");
        }
    });
});
