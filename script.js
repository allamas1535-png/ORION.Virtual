// ======================
// CARRITO
// ======================

let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

// AGREGAR PRODUCTOS

function agregarCarrito(nombre, precio){

    carrito.push({

        nombre:nombre,
        precio:precio

    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado");

}

// MOSTRAR CARRITO

function mostrarCarrito(){

    let contenedor =
    document.getElementById("lista-carrito");

    if(!contenedor) return;

    let total = 0;

    contenedor.innerHTML = "";

    carrito.forEach((producto,index)=>{

        total += producto.precio;

        contenedor.innerHTML += `

        <div class="carrito-producto">

            <div>

                <h3>${producto.nombre}</h3>

                <p>$${producto.precio}</p>

            </div>

            <button onclick="eliminarProducto(${index})">

                Eliminar

            </button>

        </div>

        `;

    });

    let totalHTML =
    document.getElementById("total");

    if(totalHTML){

        totalHTML.innerText =
        "$" + total;

    }

}

// ELIMINAR PRODUCTOS

function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();

}

// MOSTRAR AUTOMÁTICO

mostrarCarrito();