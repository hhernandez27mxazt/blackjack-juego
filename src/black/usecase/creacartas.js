import {shuffle} from 'underscore'

const letras = ['C', 'D', 'H', 'S']
const letrasMayores = ['A', 'J', 'K', 'Q']

export const crearCartas = () => {
    const arr = []
    for (let i = 2; i <= 10; i++) {
        for (const letra of letras) {
            arr.push(i + letra)

        }
    }
    //resto de cartas
    for (const letraMenor of letras) {
        for (const letrMayor of letrasMayores) {
            arr.push(letrMayor + letraMenor)
        }
    }

    return shuffle(arr)


}
