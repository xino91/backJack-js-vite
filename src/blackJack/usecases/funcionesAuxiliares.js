
/**
 * Actualiza el marcador y la carta en el DOM
 * @param {HTMLelement} HTMLelement 
 * @param {number} marcador marcador para actualizar HTMLelemet.innerText
 * @param {Element} divCarta Elemento div de la carta
 * @param {HTMLImageElement} cartaHTML realiza el divCarta.append(cartaHTML) para actualizar el element
 */
export const updateMarcadorImagenDOM = (HTMLelement, marcador, divCarta, cartaHTML) =>{
    HTMLelement.innerText = marcador;
    divCarta.append(cartaHTML);
}
