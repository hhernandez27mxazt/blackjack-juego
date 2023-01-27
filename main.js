import './style.css'

import {  calculaValorCarta, pintaCarta, imprimeMsg, juegaComputadora,crearCartas } from './src/black/usecase/index'
import {
    btnJuegoNuevo, btnPedirCarta, btnJuegaComputadora, divJugadorCartas,
    divJugadorComputadora, smallPuntosJugador, smallPuntosComputadora, VALOR_GANA, puntos,msgDiv
} from './src/black/usecase/constantes'


'use strict'

let arregloCartas = []



const llamaJuegoNuevoFunc = () => {
   
    arregloCartas = crearCartas()
    divJugadorCartas.innerHTML = ''
    divJugadorComputadora.innerHTML = ''
    btnPedirCarta.disabled = false
    btnJuegaComputadora.disabled = false
    msgDiv.innerHTML = ''
    smallPuntosJugador.innerHTML = '0'
    smallPuntosComputadora.innerHTML = '0'
    puntos.puntosJugador = 0
    puntos.puntosComputadora = 0

}

const pedirCarta = () => {

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


const llamarjuegaComputadora = () => {
    juegaComputadora(arregloCartas, btnJuegaComputadora, btnPedirCarta, divJugadorComputadora, smallPuntosComputadora)

}
const acumulaPuntosComputadora = (valor = 0, contador) => {
    contador += valor
}


btnJuegoNuevo.addEventListener('click', llamaJuegoNuevoFunc)
btnPedirCarta.addEventListener('click', pedirCarta)
btnJuegaComputadora.addEventListener('click', llamarjuegaComputadora)
