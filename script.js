function mostrarRecetas() {
    const recetas = document.querySelectorAll('.receta');

    recetas.forEach(receta => {
        const posicionReceta = receta.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;

        if (posicionReceta < alturaVentana * 0.8) { // Ajusta 0.8 para controlar cuándo se activa la animación
            receta.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', mostrarRecetas);

// Llamar a la función al cargar la página para que las recetas visibles se animen
mostrarRecetas();
