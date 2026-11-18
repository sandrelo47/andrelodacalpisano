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
    let productosUno = document.querySelector("#productos-uno");
let productosDos = document.querySelector("#productos-dos");
fetch("https://dummyjson.com/products/category/groceries")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (productosUno != null) {
        productosUno.innerHTML = "";
        for (let i = 0; i < 10; i++) {
productosUno.innerHTML += "<article class='producto'><img src='" + data.products[i].thumbnail + "' alt='" + data.products[i].title + "'><h3>" + data.products[i].title + "</h3><p>" + data.products[i].description + "</p><p><strong>Precio: USD $" + data.products[i].price + "</strong></p><a href='./product.html?id=" + data.products[i].id + "'>Ver detalle</a></article>";
            }
            }
})
    .catch(function(error) {
        console.log("El error es: " + error);
    });
    fetch("https://dummyjson.com/products/category/smartphones")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    if (productosDos != null) {
        productosDos.innerHTML = "";

        for (let i = 0; i < 10; i++) {
            productosDos.innerHTML += "<article class='producto'><img src='" + data.products[i].thumbnail + "' alt='" + data.products[i].title + "'><h3>" + data.products[i].title + "</h3><p>" + data.products[i].description + "</p><p><strong>Precio: USD $" + data.products[i].price + "</strong></p><a href='./product.html?id=" + data.products[i].id + "'>Ver detalle</a></article>";
        }
    }
})
    .catch(function(error) {
        console.log("El error es: " + error);
    });