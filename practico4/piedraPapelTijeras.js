/*1. Crea un nuevo archivo JavaScript con nombre "Piedra"dra"Papel"el"Tijera"eras.js.*/

/*EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
código para su correcta utilización.*/

const PIEDRA = "piedra"
const PAPEL = "papel"
const TIJERA = "tijera"

//FUNCION AUXILAR
function numeroAleatorio() {
    numero = Math.floor(Math.random() * 3);
    return numero
}

/*2. Crea una función llamada obtenerJugadaComputadora que generará un número
    aleatorio entre 0 y 2 para representar las opciones:- 0 para ""Piedra",- 1 para ""Papel" y- 2 para ""Tijera"*/

// FUNCION obtenerJugadaComputadora()    
function obtenerJugadaComputadora() {
    let x = numeroAleatorio()
    if (x == 0) {
        eleccionPC = PIEDRA
    } else {
        if (x == 1) {
            eleccionPC = PAPEL
        }
        else {
            eleccionPC = TIJERA
        }
    }
    return eleccionPC
}

/*3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
   elección a través de la consola.
   Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
   valor por consola.*/

//FUNCION obtenerJugadaUsuario
function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync')
    let eleccion = readlineSync.question('Elige piedra, papel o tijera! ')
    while (eleccion.toLowerCase() !== PIEDRA && eleccion.toLowerCase() !== PAPEL && eleccion.toLowerCase() !== TIJERA) {
        console.log("Valor invalido, por favor escriba correctamente.")
        eleccion = readlineSync.question('Elige piedra, papel o tijera! ')
    }
    switch (eleccion.toLowerCase()) {
        case "piedra":
            eleccionUsuario = PIEDRA
            break;
        case "papel":
            eleccionUsuario = PAPEL
            break;
        case "tijera":
            eleccionUsuario = TIJERA
            break;
    }
    return eleccionUsuario
}

/*4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.*/

//FUNCION determinarGanador
function determinarGanador(obtenerJugadaComputadora, obtenerJugadaUsuario) {
    let ganador
    if (eleccionPC == eleccionUsuario) {
        ganador = 0
    } else if (eleccionPC == TIJERA && eleccionUsuario == PAPEL) {
        ganador = 1
    }
    else if (eleccionUsuario == TIJERA && eleccionPC == PAPEL) {
        ganador = 2
    }
    else if (eleccionPC == TIJERA && eleccionUsuario == PIEDRA) {
        ganador = 2
    }
    else if (eleccionUsuario == TIJERA && eleccionPC == PIEDRA) {
        ganador = 1
    }
    else if (eleccionPC == PIEDRA && eleccionUsuario == PAPEL) {
        ganador = 2
    }
    else if (eleccionUsuario == PIEDRA && eleccionPC == PAPEL) {
        ganador = 1
    }
    else { }
    return ganador
}

/*EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
juego, es decir:
● Una jugada: gana el ganador de esa única jugada.
● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
el usuario gane una jugada y la computadora la otra.
● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.*/

const readlineSync = require('readline-sync');
let cantidadDePartidos = readlineSync.questionInt('Cuantos partidos desea jugar? ')
let contadorEmpates = 0
let contadorGanadosPc = 0
let ContadorganadosUsuario = 0

for (let i = 0; i < cantidadDePartidos; i++) {   //abre ciclo for que repite la cantidad elegida

    // INICIO DEL PROGRAMA PRINCIPAL

    /*5. Llama a las funciones en el orden adecuado para ejecutar el juego:
       a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
       variable.*/
    let jugadaPC = obtenerJugadaComputadora()

    /* b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.*/
    let jugadaUsuario = obtenerJugadaUsuario()

    /*c) Invoca la función determinarGanador pasando como argumentos las jugadas de
    la computadora y del usuario. Almacena el resultado en una variable.*/
    let resultado = (determinarGanador(obtenerJugadaComputadora, obtenerJugadaUsuario))


    /*6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
    debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
    (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
    resultado:
    La computadora eligio: [ jugadaComputador]. El usuario eligio: [ jugadaUsuario].
    El resultado fue: [Empate | Gana la computadora | Gana el usuario].
    NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
    tres párrafos.*/

    console.log("La computadora eligio: " + jugadaPC)
    console.log("El usuario eligio: " + jugadaUsuario)

    if (resultado == 0) {
        resultadoPartido = "El resultado del partido nº " + (i + 1) + " es: Empate."
    } else {
        if (resultado == 1) {
            resultadoPartido = "El resultado del partido nº " + (i + 1) + " es: Gana la computadora."
        } else {
            resultadoPartido = "El resultado del partido nº " + (i + 1) + " es: Gana el usuario."
        }
    }
    console.log(resultadoPartido)

    //Contadores

    switch (resultado) {
        case 0:
            contadorEmpates++
            break;
        case 1:
            contadorGanadosPc++
            break;
        case 2:
            ContadorganadosUsuario++
            break;
    }

} // cierra el ciclo for

let resumen = "La computadora gano: " + contadorGanadosPc + " partidos. El usuario gano: " + ContadorganadosUsuario + " partidos. Hubo " + contadorEmpates + " empates. "

if (contadorGanadosPc == ContadorganadosUsuario) {
    console.log(resumen + "EL RESULTADO FINAL ES: EMPATE")
} else if (contadorGanadosPc > ContadorganadosUsuario) {
    console.log(resumen + "LA GANADORA ES LA COMPUTADORA.")
} else {
    console.log(resumen + "EL USUARIO ES EL GANADOR. FELICITACIONES!!")
}


