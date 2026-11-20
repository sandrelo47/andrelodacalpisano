let enlaceLogout = document.querySelector("#logout-link");

enlaceLogout.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.removeItem("email");

    mostrarSaludo();
});