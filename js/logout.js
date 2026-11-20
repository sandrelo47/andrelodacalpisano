let enlaceLogout = document.querySelector("#logout-link");

if (enlaceLogout != null) {
    enlaceLogout.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem("email");
        mostrarSaludo();
    });
}