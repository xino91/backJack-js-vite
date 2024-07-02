import { createDeck, shuffleDeck } from './usecases/deck';
import { pedirCarta } from './usecases/pedirCarta';
import { valorCarta } from './usecases/valorCarta';
import { crearCartaHTML } from './usecases/crearCartaHTML';

let marcadorJugador = 0;
let marcadorComputadora = 0;

//Referencia HTML
const boton_nuevoJuego = document.querySelector('#boton_nuevoJuego');
const boton_pedirCarta = document.querySelector('#boton_pedirCarta');
const boton_detener = document.querySelector('#boton_detener');

const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#cartas_jugador');
const divCartasComputadora = document.querySelector('#cartas_computadora');


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

console.log(valorCarta(carta));

/******************EVENTOS  ******************/
//Listener boton PedirCarta
boton_pedirCarta.addEventListener('click', () => {
    carta = pedirCarta(deck);
    
    marcadorJugador = marcadorJugador + valorCarta(carta);
    console.log('marcardorJugador', marcadorJugador);
    puntosHTML[1].innerText = marcadorJugador;

    const cartaHTML = crearCartaHTML(carta);
    divCartasJugador.append(cartaHTML);
    
    if(marcadorJugador > 21 ){
        console.warn('Lo siento, perdiste');
        boton_pedirCarta.disabled = true;
        boton_detner.disabled = true;
        //TurnoComputadora
    }
    else if (marcadorJugador === 21 ){
        console.warn('Genial, 21');
        boton_pedirCarta.disabled = true;
        boton_detener.disabled = true;
        //TurnoComputadora
    }   
});

//Listener boton detener
boton_detener.addEventListener('click', () => {
    boton_detener.disabled = true;
    boton_pedirCarta.disabled = true;
    
    //TurnoComputadora
});

//Listener boton NuevoJuego
boton_nuevoJuego.addEventListener('click', () => {
     console.clear();
     deck = createDeck();
     console.log(deck);
     deck = shuffleDeck(deck);
     console.log(deck);
 
     marcadorJugador = 0;
     marcadorComputadora = 0;
     
     puntosHTML[0].innerText = 0;
     puntosHTML[1].innerText = 0;
 
     divCartasComputadora.innerHTML = '';
     divCartasJugador.innerHTML = '';
 
     boton_pedirCarta.disabled   = false;
     boton_detener.disabled = false;
});