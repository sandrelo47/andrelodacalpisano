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
        if (listaCategorias != null) {
    listaCategorias.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        listaCategorias.innerHTML += '<li><a href="./category.html?categoria=' + data[i].slug + '">' + data[i].name + '</a></li>';
    }
    }
})

    .catch(function(error) {
        console.log("El error es: " + error);
    });