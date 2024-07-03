import { pedirCarta } from "./pedirCarta";
import { valorCarta } from "./valorCarta";
import { crearCartaHTML } from "./crearCartaHTML";

export const turnoComputadora = (puntosHTML, divCartasComputadora, deck) => {
    //if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[0].innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );
    } while(  (puntosComputadora < 17)  && (17 <= 21 ) );

    console.log('PuntosComputadora', puntosComputadora);
    return puntosComputadora;
}
