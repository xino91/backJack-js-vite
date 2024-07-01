/**
  * Esta función pide carta de la baraja
  * @param {Array<String>} deck
  * @returns {String} retorna la carta del deck
  */
export const pedirCarta = ( deck ) => {
 
    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el baraja');
    }
    const carta = deck.pop(); //saca la carta de la baraja
    return carta;
}