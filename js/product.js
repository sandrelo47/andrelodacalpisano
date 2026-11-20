let parametros = new URLSearchParams(window.location.search);
let idProducto = parametros.get("id");

let estadoProducto = document.querySelector("#estado-producto");
let detalleProducto = document.querySelector("#detalle-producto");
let seccionReviews = document.querySelector("#seccion-reviews");

if (idProducto == null || idProducto == "") {
    estadoProducto.innerText = "No se indicó el producto que querés ver.";
} else {
    fetch("https://dummyjson.com/products/" + idProducto)
        .then(function (respuesta) {
    return respuesta.json();
})
        .then(function (producto) {
            estadoProducto.innerText = "";

            detalleProducto.style.display = "flex";
            seccionReviews.style.display = "block";

            document.querySelector("#imagen-producto").src = producto.thumbnail;
            document.querySelector("#imagen-producto").alt = producto.title;
            document.querySelector("#marca-producto").innerText =
                producto.brand || "Marca no informada";
            document.querySelector("#titulo-producto").innerText =
                producto.title;
            document.querySelector("#ruta-producto").innerText =
                producto.title;
            document.querySelector("#precio-producto").innerText =
                "USD $" + producto.price;
            document.querySelector("#descripcion-producto").innerText =
                producto.description;
            document.querySelector("#ficha-marca").innerText =
                producto.brand || "Marca no informada";
            document.querySelector("#stock-producto").innerText =
                producto.stock + " unidades";

            let nombreCategoria = producto.category;

let urlCategoria =
    "./category.html?categoria=" + producto.category;

            document.querySelector("#categoria-producto").innerText =
                nombreCategoria;
            document.querySelector("#categoria-producto").href = urlCategoria;

            document.querySelector("#enlace-categoria").innerText =
                nombreCategoria;
            document.querySelector("#enlace-categoria").href = urlCategoria;

            let listaTags = document.querySelector("#tags-producto");

            for (let i = 0; i < producto.tags.length && i < 3; i++) {
                let tag = document.createElement("li");
                tag.innerText = producto.tags[i];
                listaTags.appendChild(tag);
            }

            mostrarReviews(producto.reviews);
        })
    
}

function mostrarReviews(reviews) {
    let listaReviews = document.querySelector("#lista-reviews");
    let estadoReviews = document.querySelector("#estado-reviews");

    if (reviews.length == 0) {
        estadoReviews.innerText =
            "Este producto todavía no tiene opiniones.";
    }

    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i];
                listaReviews.innerHTML +=
            "<article class='review'>" +
            "<p class='review-rating'>" + review.rating + "/5</p>" +
            "<p>" + review.comment + "</p>" +
            "<p class='review-fecha'>" + review.date + "</p>" +
            "<p class='review-usuario'>" + review.reviewerName + "</p>" +
            "</article>";
    }
}