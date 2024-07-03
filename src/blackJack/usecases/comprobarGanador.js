
export const comprobarGanador = (marcadorComputadora, marcadorJugador) => {
    setTimeout( () => {
        if(marcadorComputadora === marcadorJugador){
            alert("Empate");
        }
        else if(marcadorComputadora > 21){
            alert('Enhorabuena, Ganaste');
        }
        else if(marcadorJugador > 21){
            alert('Perdiste');
        }
        else if(marcadorComputadora > marcadorJugador){
            alert('Perdiste')
        }
        else{
            alert('Enhorabuena, Ganaste');
        }
    }, 800);
}