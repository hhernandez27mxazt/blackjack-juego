import {
    btnPedirCarta, btnJuegaComputadora, divJugadorCartas, 
    divJugadorComputadora, smallPuntosJugador, smallPuntosComputadora, puntos,msgDiv
} from './constantes'
export const creaJuegoNuevo = () =>{

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