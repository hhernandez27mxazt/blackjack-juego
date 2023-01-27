import {  calculaValorCarta } from "./calculavalor"
import { decideGanador } from "./decideganador"
import { imprimeMsg } from "./imprimemsg"
import { pintaCarta } from "./pintacarta"
import { VALOR_GANA,puntos } from "./constantes"


export const juegaComputadora = (arregloCartas,btnJuegaComputadora,btnPedirCarta, divJugadorComputadora, smallPuntosComputadora) => {
    btnPedirCarta.disabled = true
    do {
        const carta = arregloCartas.pop()

        pintaCarta(carta, divJugadorComputadora)

        const valorCarta = calculaValorCarta(carta)

        puntos.puntosComputadora+=valorCarta
        smallPuntosComputadora.innerHTML = puntos.puntosComputadora

        if (puntos.puntosComputadora === puntos.puntosJugador) {
            imprimeMsg('alert-danger', 'Has perdido amigo 👎🏻')
            btnJuegaComputadora.disabled = true
            break
        }

        if (puntos.puntosComputadora > VALOR_GANA || puntos.puntosComputadora > puntos.puntosJugador) {
            btnJuegaComputadora.disabled = true
            break
        }


    } while (arregloCartas.length > 0)
    decideGanador(puntos.puntosComputadora, puntos.puntosJugador)


}