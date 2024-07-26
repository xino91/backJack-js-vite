/**
 * Mostrará un mensaje alert con el ganador del juego
 * @param {number} marcadorComputadora 
 * @param {number} marcadorJugador 
 */
export const comprobarGanador = (marcadorComputadora, marcadorJugador) => {
    setTimeout( () => {
        if(marcadorComputadora === marcadorJugador){
            alert("Empate");
        }
        else if(marcadorJugador > 21){
            alert('Perdiste');
        }
        else if(marcadorComputadora > 21 & marcadorJugador <= 21){
            alert('Enhorabuena, ganaste');
        }
        else if(marcadorComputadora > marcadorJugador){
            alert('Perdiste')
        }
        else if(marcadorJugador > marcadorComputadora){
            alert('Enhorabuena, ganaste');
        }
    }, 800);
}