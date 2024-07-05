import { pedirCarta } from "./pedirCarta";
import { valorCarta } from "./valorCarta";
import { crearCartaHTML } from "./crearCartaHTML";
import { updateMarcadorImagenDOM } from "./funcionesAuxiliares";

export const turnoComputadora = (puntosHTML, divCartasComputadora, deck, marcadorComputadora, marcadorJugador) => {
    //if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    do{
        const carta = pedirCarta(deck);

        marcadorComputadora = marcadorComputadora + valorCarta( carta );
        const imgCarta = crearCartaHTML( carta );
        updateMarcadorImagenDOM(puntosHTML[0], marcadorComputadora, divCartasComputadora, imgCarta);
        if(marcadorJugador > 21 ){ break;}

    } while(  (marcadorComputadora < 17 ) );

    console.log('PuntosComputadoraTurno', marcadorComputadora);
    return marcadorComputadora;
}
