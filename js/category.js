let parametrosCategoria = new URLSearchParams(window.location.search);
let categoria = parametrosCategoria.get("categoria");

let estadoCategoria = document.querySelector("#estado-categoria");
let listaProductos = document.querySelector("#productos-categoria");

if (categoria == null || categoria == "") {
    estadoCategoria.innerText = "No se seleccionó una categoría.";
    fetch("https://dummyjson.com/products/category/" + categoria)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se pudieron cargar los productos.");
            }

            return respuesta.json();
        })
        .then(function (datos) {
           let nombreCategoria = categoria;

            document.querySelector("#titulo-categoria").innerText =
                nombreCategoria;

            document.querySelector("#ruta-categoria").innerText =
                nombreCategoria;

            document.querySelector("#cantidad-productos").innerText =
                datos.products.length + " productos en " + nombreCategoria;

            estadoCategoria.innerText = "";

            if (datos.products.length == 0) {
                estadoCategoria.innerText =
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
                titulo.innerText = producto.title;

                let descripcion = document.createElement("p");
                descripcion.innerText = producto.description;

                let precio = document.createElement("p");
                let precioTexto = document.createElement("strong");
                precioTexto.innerText = "Precio: USD $" + producto.price;
                precio.appendChild(precioTexto);

                let enlaceDetalle = document.createElement("a");
                enlaceDetalle.href =
                "./product.html?id=" + producto.id;
                enlaceDetalle.innerText = "Ver detalle";

                tarjeta.appendChild(imagen);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(descripcion);
                tarjeta.appendChild(precio);
                tarjeta.appendChild(enlaceDetalle);

                listaProductos.appendChild(tarjeta);
            }
        })
        .catch(function (error) {
            estadoCategoria.innerText =
                "No se pudieron cargar los productos. Intentá nuevamente.";
            console.log("El error es: " + error);
        });
}