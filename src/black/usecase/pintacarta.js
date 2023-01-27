
export const pintaCarta = (carta, divObjeto) => {
    const nuevaImagen = document.createElement('img')
    nuevaImagen.src = `./assets/cartas/${carta}.png`
    nuevaImagen.classList.add('carta')
    divObjeto.appendChild(nuevaImagen)
}