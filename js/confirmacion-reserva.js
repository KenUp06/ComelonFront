var modal = document.getElementById("modal");
var modalMessage = document.getElementById("modal-message");
var span = document.getElementsByClassName("close")[0];


document.getElementById('reservaForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    if (mesaDisponible) {
        modalMessage.textContent = "¡Reserva confirmada! Su mesa está disponible.";
    } else {
        modalMessage.textContent = "No se pudo crear la reserva. La mesa no está disponible.";
    }

    modal.style.display = "flex";
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}