const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");

// Mostrar el popup y cambiar el color del botón al hacer clic en el botón de inicio de sesión
loginButton.addEventListener("click", () => {
    loginButton.classList.add("clicked"); // Cambia el color del botón
    loginPopup.style.display = "block"; // Muestra el popup
});

// Ocultar el popup y restaurar el color del botón al hacer clic en el botón de cierre
closePopup.addEventListener("click", () => {
    loginPopup.style.display = "none"; // Oculta el popup
    loginButton.classList.remove("clicked"); // Restaura el color del botón
});

// Cerrar el popup al hacer clic fuera de él y restaurar el color del botón
window.addEventListener("click", (event) => {
    if (event.target == loginPopup) {
        loginPopup.style.display = "none";
        loginButton.classList.remove("clicked"); // Restaura el color del botón
    }
});
