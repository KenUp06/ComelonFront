document.getElementById('mesaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const numMesa = document.getElementById('num_mesa').value;
    const capacidad = document.getElementById('capacidad').value;
    const ubicacion = document.getElementById('ubicacion').value;

    if (numMesa && capacidad && ubicacion) {
        // Aquí puedes hacer una llamada a tu backend para agregar la mesa a la base de datos
        console.log(`Mesa agregada: Número ${numMesa}, Capacidad: ${capacidad}, Ubicación: ${ubicacion}`);
        alert("¡Mesa agregada correctamente!");
    } else {
        alert("Por favor, rellene todos los campos correctamente.");
    }
});