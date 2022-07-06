/**
               Simulador Interactivo de una compra de productos necesarios para hacer un completo.
 */


let producto

function sumaProductos(producto1, producto2, producto3, producto4, producto5) {
  console.log(producto1 + producto2 + producto3 + producto4 + producto5)
}

sumaProductos(100, 200, 500, 1000, 1500)
do {
    producto = prompt("Ingrese ingrediente para hacer un completo").toLowerCase()

    if (producto != "pan" && producto != "vienesa" && producto != "tomate" && producto != "palta" && producto != "mayonesa") {
        alert("Ingresa un ingrediente adecuado para hacer un completo")
    }
    switch (producto) {
        case "pan":
            alert("1er ingrediente seleccionado")
            break
        case "vienesa":
            alert("2do ingrediente seleccionado")
            break
        case "tomate":
            alert("3er ingrediente seleccionado")
            break
        case "palta":
            alert("4to ingrediente seleccionado")
            break
        case "mayonesa":
            alert("5to ingrediente seleccionado")
            break
    }

} while (producto != "pan" || producto != "vienesa" || producto != "tomate" || producto != "palta" || producto != "mayonesa")