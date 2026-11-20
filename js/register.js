let formularioRegistro =
    document.querySelector("#formulario-registro");

let campoEmail =
    document.querySelector("#email");

let campoPassword =
    document.querySelector("#password");

let campoRepetirPassword =
    document.querySelector("#repeat-password");

let errorEmail =
    document.querySelector("#error-email");

let errorPassword =
    document.querySelector("#error-password");

let errorRepetirPassword =
    document.querySelector("#error-repeat-password");

formularioRegistro.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        let formularioValido = true;

        errorEmail.innerText = "";
        errorPassword.innerText = "";
        errorRepetirPassword.innerText = "";

        if (campoEmail.value == "") {
            errorEmail.innerText =
                "El email es obligatorio";

            formularioValido = false;
        }

        if (campoPassword.value == "") {
            errorPassword.innerText =
                "La contraseña es obligatoria";

            formularioValido = false;
        } else {
            if (campoPassword.value.length < 6) {
                errorPassword.innerText =
                    "La contraseña debe tener al menos 6 caracteres";

                formularioValido = false;
            }
        }

        if (
    campoPassword.value ==
    campoRepetirPassword.value
) {
    if (formularioValido == true) {
        this.submit();
    }
} else {
    errorRepetirPassword.innerText =
        "Las contraseñas no coinciden";
}
    }
);