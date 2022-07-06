/**
                   Simulador Interactivo de una compra de ingredientes necesarios para hacer un completo.
 */


let ingrediente = 1

do {
    ingrediente = prompt("Ingrese ingrediente para hacer un completo").toLowerCase()

    if (ingrediente != "pan" && ingrediente != "vienesa" && ingrediente != "tomate" && ingrediente != "palta" && ingrediente != "mayonesa") {
        alert("Ingresa un ingrediente adecuado para hacer un completo")
    }
    switch (ingrediente) {
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

} while (ingrediente != "pan" || ingrediente != "vienesa" || ingrediente != "tomate" || ingrediente != "palta" || ingrediente != "mayonesa")