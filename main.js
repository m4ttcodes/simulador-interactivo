/**
               Primera pre-entrega del proyecto final. Consiste en una simulación de consulta de componentes de hardware para pc.
 */

                     //Class para luego crear los objetos    

class Componente{
    
constructor(marca, modelo){
this.marca = marca   
this.modelo = modelo                        
}
}
                      
const componente1 = new Componente("amd","Ryzen 3600")
const componente2 = new Componente("amd","Ryzen 5600X")
const componente3 = new Componente("amd","Ryzen 5950X")
const componente4 = new Componente("intel","i5 11400")
const componente5 = new Componente("intel","i9 12900K")
const componente6 = new Componente("nvidia","GTX 1650")
const componente7 = new Componente("nvidia","GTX 1660 Super")
const componente8 = new Componente("nvidia","RTX 2060")
const componente9 = new Componente("nvidia","RTX 3050")
const componente10 = new Componente("amd","RX 6500")
const componente11 = new Componente("asus","X570")
const componente12 = new Componente("msi","B460")
const componente13 = new Componente("gigabyte","B550")
const componente14 = new Componente("asrock","Z690")
const componente15 = new Componente("kingston","hyperx")
const componente16 = new Componente("crucial","Ryzen 3600")
const componente17 = new Componente("corsair","Ryzen 3600")
const componente18 = new Componente("gigabyte","aorus")
const componente19 = new Componente("hp","Ryzen 3600")
const componente20 = new Componente("team","Ryzen 3600")                      
                      
const componentes = [componente1, componente2, componente3, componente4, componente5, componente6, componente7, pelicula8, componente9, componente10, componente11, componente12, componente13, componente14, componente15, componente16, componente17, componente18, componente19, componente20]

                             //Inicio con un alert

alert("Contamos con una lista de componentes de hardware para PC, los cuales puedes valorar para definir cuales son los preferidos por la gente")

let respuesta, respuestaSwitch

                        //Consulto el tipo de búsqueda

do {
    respuesta = parseFloat(prompt(" Ingrese un número del tipo de búsqueda que desea realizar, de acuerdo a la clasificación del componente.\n Placa base. Ingresa 1\n Procesador(CPU). Ingresa 2\n Tarjeta de videro(GPU). Ingresa 3\n Memoria RAM. Ingresa 4"))
    if ((respuesta != 1) && (respuesta!= 2) && (respuesta != 3) && (respuesta != 4)){
        alert("Por favor ingrese un número válido")
    }
} while((respuesta != "1") &&(respuesta != 2) && (respuesta != 3) && (respuesta != 4))


                        //Switch según número ingresado

switch(respuesta){
    case 1 : 
        do{ // Se pide ingresar marca
            respuestaSwitch = prompt("Ingrese la marca que busca del componente seleccionado.\n (Los resultados se mostrarán en la consola)").toLocaleLowerCase()
        } while (respuestaSwitch!= "msi" && respuestaSwitch!= "asus" && respuestaSwitch!= "asrock" && respuestaSwitch!= "gigabyte")
        
        const componenteModelo = componentes.filter(componente => componente.modelo == respuestaSwitch)
    componenteModelo.forEach(componente => {
    console.log(`El componente que buscas es ${componente.modelo}.`)
    })
    break

    case 2 :
        do{ // Se pide ingresar marca
            respuestaSwitch = prompt("Ingrese la marca que busca del componente seleccionado.\n (Los resultados se mostrarán en la consola)").toLocaleLowerCase()
            } while (respuestaSwitch!= "intel" && respuestaSwitch!= "amd")
            
            const componenteMarca = componentes.filter(componente => componente.marca.includes(respuestaSwitch) == true)
            componenteMarca.forEach(componente => {console.log(`El componente que buscas es ${componente.modelo}.`)
            })
            break

    case 3 :
        do{ // Se pide ingresar marca
            respuestaSwitch = prompt("Ingrese la marca que busca del componente seleccionado.\n (Los resultados se mostrarán en la consola)").toLocaleLowerCase()
            } while (respuestaSwitch!= "nvidia" && respuestaSwitch!= "amd")
            case 1 : 
            const peliculasFiltradasDuracion1 = peliculas.filter(pelicula => pelicula.duracion < 120)
            peliculasFiltradasDuracion1.forEach(pelicula => {
            console.log(`El componente que buscas es ${componente.modelo}.`)
            })
            break
            case 2 : // si ingresa dos, muestro las peliculas que duren mas de 120 minutos
            const peliculasFiltradasDuracion2 = peliculas.filter(pelicula => pelicula.duracion >= 120)
            peliculasFiltradasDuracion2.forEach(pelicula => {
            console.log(`El componente que buscas es ${componente.modelo}.`)
            })
            break
            }
        // break

//     case 4 :
//         do{ // pido ingresar puntaje entre el 89 y 100
//             respuestaSwitch = parseFloat(prompt("Para buscar según el puntaje ingrese un número entre el 89 y el 100  \n (Los resultados se podrán ver en consola)"))
//             } while (respuestaSwitch!= "hp" && respuestaSwitch!= "corsair" && respuestaSwitch!= "team" && respuestaSwitch!= "crucial" && respuestaSwitch!= "kingston")
//             // muestro la info de componentes que coincidan con la respuesta del usuario 
//             const peliculasFiltradas4 = peliculas.filter(pelicula => pelicula.puntuacion == respuestaSwitch)
//             peliculasFiltradas4.forEach(pelicula => {
//             console.log(`El componente que buscas es ${componente.modelo}.`)
//             })
//         break
                          
// }