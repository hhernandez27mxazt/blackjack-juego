

import {  calculaValorCarta } from "./calculavalor"
import { imprimeMsg } from "./imprimemsg"
import { pintaCarta } from "./pintacarta"
import { VALOR_GANA,puntos, divJugadorCartas,btnPedirCarta,smallPuntosJugador,btnJuegaComputadora} from "./constantes"



export const pedirCarta = (arregloCartas) => {

    if (arregloCartas.length > 0) {
        const carta = arregloCartas.pop()
        pintaCarta(carta, divJugadorCartas)

        const valorCarta = calculaValorCarta(carta)
        puntos.puntosJugador += valorCarta


        if (puntos.puntosJugador === VALOR_GANA) {
            imprimeMsg('alert-success', 'Has ganado amigo 👍🏻')
            btnPedirCarta.disabled = true
        }

        smallPuntosJugador.innerHTML = puntos.puntosJugador

        if (puntos.puntosJugador > VALOR_GANA) {
            btnPedirCarta.disabled = true
            btnJuegaComputadora.disabled = true
            imprimeMsg('alert-danger', 'Has perdido amigo 👎🏽')

        }
    }


}