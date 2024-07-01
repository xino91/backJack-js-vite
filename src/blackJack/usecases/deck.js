import _ from "underscore"

/**
 * Esta función devuelve la baraja
 * @returns {ArrayString} Devuelve la baraja sin barajar
 */
export const createDeck = () => {
    let deck = [];
    let tiposNaipes = ['C', 'D', 'H', 'S'];
    let tiposFiguras = ['A', 'K', 'Q', 'J']; 

    for(let i=2; i<11; i++){
        for(let naipe of tiposNaipes){
            deck.push(i+naipe);
        }
    }
    for(let figura of tiposFiguras){
        for(let naipe of tiposNaipes){
            deck.push(figura+naipe);
        }
    }
    return deck;
}

/**
 * Esta función baraja la baraja y la devuelve
 * @param {ArrayString} deck 
 * @returns {ArrayString} Shuffled deck
 */
export const shuffleDeck = (deck) =>{
    return _.shuffle(deck);
}
