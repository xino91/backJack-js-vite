import { createDeck, shuffleDeck } from "./usecases/deck";
import { pedirCarta } from "./usecases/pedirCarta";

//The deck is created
let deck = createDeck();

//Shuffle deck
deck = shuffleDeck(deck);
console.log(deck);

let carta = pedirCarta(deck);
console.log(carta);

console.log(deck);

carta = pedirCarta(deck);
console.log(carta);