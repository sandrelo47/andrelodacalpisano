let parametros = new URLSearchParams(window.location.search);
let idProducto = parametros.get("id");

let estadoProducto = document.querySelector("#estado-producto");
let detalleProducto = document.querySelector("#detalle-producto");
let seccionReviews = document.querySelector("#seccion-reviews");

if (idProducto == null || idProducto == "") {
    estadoProducto.textContent = "No se indicó el producto que querés ver.";
} else {
    fetch("https://dummyjson.com/products/" + idProducto)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se encontró el producto.");
            }

            return respuesta.json();
        })
        .then(function (producto) {
            estadoProducto.textContent = "";

            detalleProducto.style.display = "flex";
            seccionReviews.style.display = "block";

            document.querySelector("#imagen-producto").src = producto.thumbnail;
            document.querySelector("#imagen-producto").alt = producto.title;
            document.querySelector("#marca-producto").textContent =
                producto.brand || "Marca no informada";
            document.querySelector("#titulo-producto").textContent =
                producto.title;
            document.querySelector("#ruta-producto").textContent =
                producto.title;
            document.querySelector("#precio-producto").textContent =
                "USD $" + producto.price;
            document.querySelector("#descripcion-producto").textContent =
                producto.description;
            document.querySelector("#ficha-marca").textContent =
                producto.brand || "Marca no informada";
            document.querySelector("#stock-producto").textContent =
                producto.stock + " unidades";

            let nombreCategoria = producto.category.replace(/-/g, " ");
            let urlCategoria =
                "./category.html?categoria=" +
                encodeURIComponent(producto.category);

            document.querySelector("#categoria-producto").textContent =
                nombreCategoria;
            document.querySelector("#categoria-producto").href = urlCategoria;

            document.querySelector("#enlace-categoria").textContent =
                nombreCategoria;
            document.querySelector("#enlace-categoria").href = urlCategoria;

            let listaTags = document.querySelector("#tags-producto");

            for (let i = 0; i < producto.tags.length && i < 3; i++) {
                let tag = document.createElement("li");
                tag.textContent = producto.tags[i];
                listaTags.appendChild(tag);
            }

            mostrarReviews(producto.reviews);
        })
        .catch(function (error) {
            estadoProducto.textContent =
                "No se pudo cargar el producto. Intentá nuevamente.";
            console.log("El error es: " + error);
        });
}

function mostrarReviews(reviews) {
    let listaReviews = document.querySelector("#lista-reviews");
    let estadoReviews = document.querySelector("#estado-reviews");

    if (reviews.length == 0) {
        estadoReviews.textContent =
            "Este producto todavía no tiene opiniones.";
    }

    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i];
        let tarjeta = document.createElement("article");
        tarjeta.className = "review";

        let rating = document.createElement("p");
        rating.className = "review-rating";
        rating.textContent = review.rating + "/5";

        let comentario = document.createElement("p");
        comentario.textContent = review.comment;

        let fecha = document.createElement("p");
        fecha.className = "review-fecha";
        fecha.textContent =
            new Date(review.date).toLocaleDateString("es-AR");

        let usuario = document.createElement("p");
        usuario.className = "review-usuario";
        usuario.textContent = review.reviewerName;

        tarjeta.appendChild(rating);
        tarjeta.appendChild(comentario);
        tarjeta.appendChild(fecha);
        tarjeta.appendChild(usuario);
        listaReviews.appendChild(tarjeta);
    }
}