import { msgDiv } from "./constantes"


export const imprimeMsg = (estilo, texto) => {
    let msg = document.createElement("div")
    msg.classList.add('alert')
    msg.classList.add(estilo)
    msg.innerText = texto
   
    msgDiv.appendChild(msg)
}
