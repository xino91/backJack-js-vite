
/**
 * 
 * @param {HTMLelement} HTMLelement 
 * @param {number} marcador 
 * @param {Element} divCarta 
 * @param {HTMLImageElement} cartaHTML 
 */
export const updateMarcadorImagenDOM = (HTMLelement, marcador, divCarta, cartaHTML) =>{
    HTMLelement.innerText = marcador;
    divCarta.append(cartaHTML);
}
