import { pedirCarta } from "./pedirCarta";
import { valorCarta } from "./valorCarta";
import { crearCartaHTML } from "./crearCartaHTML";
import { updateMarcadorImagenDOM } from "./funcionesAuxiliares";

/**
 * 
 * @param {HTMLElement} puntosHTML 
 * @param {Element} divCartasComputadora 
 * @param {Array<String>} deck Array de la baraja
 * @param {number} marcadorComputadora 
 * @param {number} marcadorJugador 
 * @returns 
 */
export const turnoComputadora = (puntosHTML, divCartasComputadora, deck, marcadorComputadora, marcadorJugador) => {
    //if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    do{
        const carta = pedirCarta(deck);

        marcadorComputadora = marcadorComputadora + valorCarta( carta );
        const imgCarta = crearCartaHTML( carta );
        updateMarcadorImagenDOM(puntosHTML[0], marcadorComputadora, divCartasComputadora, imgCarta);
        //ejecutaIteracion(puntosHTML, divCartasComputadora, deck, marcadorComputadora);
        
        if(marcadorJugador > 21 ){break;}

    } while(  (marcadorComputadora < 17 ) );
    //console.log('PuntosComputadoraTurno', marcadorComputadora);
    return marcadorComputadora;
}

const ejecutaIteracion = (puntosHTML, divCartasComputadora, deck, marcadorComputadora) => {
    
}