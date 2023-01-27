export const VALOR_GANA = 21

//elementos del DOM  querySelector   (# es por id ) (. por clase )
export const btnJuegoNuevo = document.querySelector('#btn-juego-nuevo')
export const btnPedirCarta = document.querySelector('#btn-pedir-carta')
export const btnJuegaComputadora = document.querySelector('#btn-juega-compu')
export const divJugadorCartas = document.querySelector('#jugador-cartas')
export const divJugadorComputadora = document.querySelector('#computadora-cartas')
export const smallPuntosJugador = document.querySelector('#texto-puntos-jugador')
export const smallPuntosComputadora = document.querySelector('#texto-puntos-computadora')
export const msgDiv = document.querySelector('#msg-div')


export const puntos={
    puntosJugador:0,
    puntosComputadora: 0 
}