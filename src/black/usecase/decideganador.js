import { VALOR_GANA } from "./constantes"
import { imprimeMsg } from "./imprimemsg"

/**
 * 
 * @param {Number} puntosComputadora 
 * @param {Number} puntosJugador 
 */
export const decideGanador = (puntosComputadora=0,puntosJugador=0) => {
    
    if (puntosComputadora > VALOR_GANA || puntosComputadora > puntosJugador) {
        imprimeMsg('alert-warning', 'Nadie gana 🤷‍♀️')
       
    }

}