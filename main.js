import './style.css'

import {  calculaValorCarta, 
    pintaCarta, imprimeMsg, juegaComputadora,pedirCarta,
    crearCartas } from './src/black/usecase/index'
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

const llamaPedirCarta = () => {
    
   pedirCarta(arregloCartas)
}


const llamarjuegaComputadora = () => {
    juegaComputadora(arregloCartas, btnJuegaComputadora, btnPedirCarta, divJugadorComputadora, smallPuntosComputadora)

}
const acumulaPuntosComputadora = (valor = 0, contador) => {
    contador += valor
}


btnJuegoNuevo.addEventListener('click', llamaJuegoNuevoFunc)
btnPedirCarta.addEventListener('click', llamaPedirCarta)
btnJuegaComputadora.addEventListener('click', llamarjuegaComputadora)
