

/**
 * 
 * @param {String} carta 
 * @returns Number regresa valor carta
 */
export const calculaValorCarta = (carta = '') => {
    const letraCarta = carta.substring(0, carta.length - 1)
    return isNaN(letraCarta) ? (letraCarta === 'A' ? 11 : 10) : letraCarta * 1

}



export const acumulaPuntosJuego = (contador=0,valor = 0) => {
    contador += valor
}
