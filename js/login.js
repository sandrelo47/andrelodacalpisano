let formularioLogin = document.querySelector("#formulario-login");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value;
    let errorEmail = document.querySelector("#error-email");
    let errorPassword = document.querySelector("#error-password");
    let formularioValido = true;

    errorEmail.textContent = "";
    errorPassword.textContent = "";

    if (email == "") {
        errorEmail.textContent = "El email es obligatorio.";
        formularioValido = false;
    }

    if (password == "") {
        errorPassword.textContent = "La contraseña es obligatoria.";
        formularioValido = false;
    } else if (password.length < 6) {
        errorPassword.textContent =
            "La contraseña debe tener al menos 6 caracteres";
        formularioValido = false;
    }

    if (formularioValido) {
        localStorage.setItem("email", email);
        window.location.href = "./index.html";
    }
});