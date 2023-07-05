$(document).ready(function () {
    // Mostrar formulario de creación al hacer clic en el botón "Agregar nuevo videojuego"
    $("#btnAdd").click(function () {
        $("#addForm").show();
    });

    // Ocultar formulario de creación al hacer clic en el botón "Cancelar"
    $("#btnCancel").click(function () {
        $("#addForm").hide();
    });

    // Enviar el formulario de creación al hacer clic en "Guardar"
    $("#createForm").submit(function (e) {
        e.preventDefault();

        // Obtener los valores de los campos de entrada
        var title = $("#title").val();
        var platform = $("#platform").val();
        var genre = $("#genre").val();

        // Realizar la operación de creación (enviar datos al servidor, etc.)
        // Ejemplo:
        // $.post("/VideoGames/Create", { title: title, platform: platform, genre: genre })
        //     .done(function(response) {
        //         // Actualizar la tabla de videojuegos con el nuevo registro
        //         // ...

        //         // Ocultar formulario de creación
        //         $("#addForm").hide();

        //         // Limpiar los campos de entrada
        //         $("#title").val("");
        //         $("#platform").val("");
        //         $("#genre").val("");
        //     });

        // NOTA: Para implementar el CRUD completo, debes agregar lógica similar para Leer, Actualizar y Eliminar registros.
    });
});
