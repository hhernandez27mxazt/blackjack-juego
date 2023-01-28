import './style.css'

import {  juegaComputadora,pedirCarta,crearCartas } from './src/black/usecase/index'
import {
    btnJuegoNuevo, btnPedirCarta, btnJuegaComputadora, divJugadorCartas, 
    divJugadorComputadora, smallPuntosJugador, smallPuntosComputadora, puntos,msgDiv
} from './src/black/usecase/constantes'
import { creaJuegoNuevo } from './src/black/usecase/juegonuevo'

'use strict'
let arregloCartas = []

const llamaJuegoNuevoFunc = () => {
    arregloCartas = crearCartas()
    creaJuegoNuevo()
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
