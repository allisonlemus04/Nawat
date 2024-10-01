// Seleccionamos todos los botones con la clase "boton-detalles"
const botonesDetalles = document.querySelectorAll('.boton-detalles');

// Recorremos cada botón y le añadimos un evento click
botonesDetalles.forEach((boton) => {
    boton.addEventListener('click', function() {
        // Encontramos el div de detalles más cercano al botón
        const detalles = this.closest('.producto').querySelector('.bloque_detalles');

        // Alternamos la visibilidad del div de detalles
        const isVisible = window.getComputedStyle(detalles).display === "block";

        if (isVisible) {
            detalles.style.display = "none"; // Ocultar detalles
            this.textContent = "Mostrar detalles";
        } else {
            detalles.style.display = "block"; // Mostrar detalles
            this.textContent = "Ocultar detalles";
        }
    });
});
    