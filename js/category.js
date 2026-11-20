let parametrosCategoria = new URLSearchParams(window.location.search);
let categoria = parametrosCategoria.get("categoria");

let estadoCategoria = document.querySelector("#estado-categoria");
let listaProductos = document.querySelector("#productos-categoria");

if (categoria == null || categoria == "") {
    estadoCategoria.textContent = "No se seleccionó una categoría.";
} else {
    fetch("https://dummyjson.com/products/category/" + encodeURIComponent(categoria))
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se pudieron cargar los productos.");
            }

            return respuesta.json();
        })
        .then(function (datos) {
            let nombreCategoria = categoria.replace(/-/g, " ");
            nombreCategoria =
                nombreCategoria.charAt(0).toUpperCase() +
                nombreCategoria.slice(1);

            document.querySelector("#titulo-categoria").textContent =
                nombreCategoria;

            document.querySelector("#ruta-categoria").textContent =
                nombreCategoria;

            document.querySelector("#cantidad-productos").textContent =
                datos.products.length + " productos en " + nombreCategoria;

            estadoCategoria.textContent = "";

            if (datos.products.length == 0) {
                estadoCategoria.textContent =
                    "No hay productos en esta categoría.";
            }

            for (let i = 0; i < datos.products.length; i++) {
                let producto = datos.products[i];

                let tarjeta = document.createElement("article");
                tarjeta.className = "producto";

                let imagen = document.createElement("img");
                imagen.src = producto.thumbnail;
                imagen.alt = producto.title;

                let titulo = document.createElement("h3");
                titulo.textContent = producto.title;

                let descripcion = document.createElement("p");
                descripcion.textContent = producto.description;

                let precio = document.createElement("p");
                let precioTexto = document.createElement("strong");
                precioTexto.textContent = "Precio: USD $" + producto.price;
                precio.appendChild(precioTexto);

                let enlaceDetalle = document.createElement("a");
                enlaceDetalle.href =
                    "./product.html?id=" + encodeURIComponent(producto.id);
                enlaceDetalle.textContent = "Ver detalle";

                tarjeta.appendChild(imagen);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(descripcion);
                tarjeta.appendChild(precio);
                tarjeta.appendChild(enlaceDetalle);

                listaProductos.appendChild(tarjeta);
            }
        })
        .catch(function (error) {
            estadoCategoria.textContent =
                "No se pudieron cargar los productos. Intentá nuevamente.";
            console.log("El error es: " + error);
        });
}