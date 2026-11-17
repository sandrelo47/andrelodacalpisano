let formulario = document.querySelector(".buscador");
formulario.addEventListener("submit", function(event) {
let busqueda = document.querySelector("#busqueda").value;
if (busqueda == "") {
    event.preventDefault();
    alert("Tenés que escribir algo para buscar");
} else {
    if (busqueda.length < 3) {
        event.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }
}
});
let listaCategorias = document.querySelector("#lista-categorias");

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    listaCategorias.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
    }
})

    .catch(function(error) {
        console.log("El error es: " + error);
    });