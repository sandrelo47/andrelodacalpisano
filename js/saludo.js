function mostrarSaludo() {
    let emailUsuario = localStorage.getItem("email");
    let login = document.querySelector("#login-link");
    let registro = document.querySelector("#registro-link");
    let saludo = document.querySelector("#saludo-usuario");
    let logout = document.querySelector("#logout-contenedor");

    if (login == null || registro == null || saludo == null || logout == null) {
        return;
    }

    if (emailUsuario != null) {
        login.hidden = true;
        registro.hidden = true;
        saludo.hidden = false;
        logout.hidden = false;
        saludo.textContent = "Bienvenido: " + emailUsuario;
    } else {
        login.hidden = false;
        registro.hidden = false;
        saludo.hidden = true;
        logout.hidden = true;
        saludo.textContent = "";
    }
}

mostrarSaludo();