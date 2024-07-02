
/**
 * Esta función recibe una carta y te devuelve una HTMLImageElement, usa el nombre de la carta para añadirlo a la ruta
 * @param {String} carta
 * @returns {HTMLImageElement} devuelve la imagen de la carta
 */
export const crearCartaHTML = (carta) =>{
    if ( !carta ) throw new Error('La carta es un argumento obligatorio');

    //src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta'); //Se añade a la clase para los estilos

    return imgCarta;
}