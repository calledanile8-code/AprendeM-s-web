// Animación con jQuery
$(document).ready(function() {
    $("#btn-ver-cursos").click(function() {
        $("#lista-cursos").slideToggle(400);
    });
});

// Validación del formulario con JavaScript
const formulario = document.getElementById("form-inscripcion");
const mensaje = document.getElementById("mensaje-estado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const curso = document.getElementById("curso").value;

    if (nombre.length < 3) {
        mensaje.textContent = "Por favor, ingresa un nombre válido.";
        mensaje.style.color = "red";
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        mensaje.textContent = "Ingresa un correo electrónico válido.";
        mensaje.style.color = "red";
        return;
    }

    if (curso === "") {
        mensaje.textContent = "Debes seleccionar un curso.";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = "¡Inscripción exitosa! Nos pondremos en contacto contigo.";
    mensaje.style.color = "green";
    formulario.reset();
});