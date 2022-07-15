/**
               Primera pre-entrega del proyecto final. Consiste en una simulación de consulta de componentes de hardware para pc.
 */

                     //Class para luego crear los objetos    



                        //Inicio con un alert explicando

alert("Contamos con una lista de componentes de hardware para PC, los cuales puedes valorar para definir cuales son los preferidos por la gente")

let respuesta, respuestaSwitch

                        //Consulto el tipo de búsqueda

do {
    respuesta = parseFloat(prompt(" Ingrese un número del tipo de búsqueda que desea realizar, de acuerdo a la clasificación del componente.\n Placa base. Ingresa 1\n Procesador(CPU). Ingresa 2\n Tarjeta de videro(GPU). Ingresa 3\n Memoria RAM. Ingresa 4 "))
    if ((respuesta != 1) && (respuesta!= 2) && (respuesta != 3) && (respuesta != 4)){
        alert("Por favor ingrese un número válido")
    }
} while((respuesta != "1") &&(respuesta != 2) && (respuesta != 3) && (respuesta != 4))


                        //Switch según número ingresado

// switch(respuesta){
    