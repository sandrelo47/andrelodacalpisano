let queryString = location.search;

let queryStringObj =
    new URLSearchParams(queryString);

let terminoBuscado =
    queryStringObj.get("busqueda");

let tituloBusqueda =
    document.querySelector("#titulo-busqueda");

let mensajeBusqueda =
    document.querySelector("#mensaje-busqueda");

let listaResultados =
    document.querySelector("#resultados-busqueda");

tituloBusqueda.innerText =
    "Resultados de búsqueda para: " +
    terminoBuscado;

fetch(
    "https://dummyjson.com/products/search?q=" +
    terminoBuscado
)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.products.length == 0) {
            mensajeBusqueda.innerText =
                "No hay resultados para el término: " +
                terminoBuscado;
        } else {
            for (
                let i = 0;
                i < data.products.length;
                i++
            ) {
                let producto = data.products[i];

                listaResultados.innerHTML +=
                    "<article class='producto'>" +
                    "<img src='" +
                    producto.thumbnail +
                    "' alt='" +
                    producto.title +
                    "'>" +
                    "<h3>" +
                    producto.title +
                    "</h3>" +
                    "<p>" +
                    producto.description +
                    "</p>" +
                    "<p><strong>Precio: USD $" +
                    producto.price +
                    "</strong></p>" +
                    "<a href='./product.html?id=" +
                    producto.id +
                    "'>Ver detalle</a>" +
                    "</article>";
            }
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });