
export const pedirCarta = () => {

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