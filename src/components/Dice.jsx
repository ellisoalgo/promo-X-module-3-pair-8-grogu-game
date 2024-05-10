import "../styles/Dice.scss";
import { useState } from "react";

const Dice = () => {

  const [dice, setDice] = useState(null);

  function getRandomNumber(max) {
    max = 4;
    return Math.ceil(Math.random() * max);
  }

  const handleRollDice =(ev)=>{
    ev.preventDefault();
    setDice(getRandomNumber());
    console.log(dice);

    if(dice === 1){
      //eliminar 1 galleta: splice? de posición 0
      //comprobación de length array - cambiar mensaje por ejemplo
      //"¡Has descargado una galleta!"
      //HAY QUE LIMITAR A 3 VECES
      console.log("¡Has descargado una galleta!");
    } else if (dice === 2){
      //eliminar 1 huevo: splice? de posición 0
      //comprobación de length array - cambiar mensaje por ejemplo
      //"¡Has descargado un huevo!"
      //HAY QUE LIMITAR A 3 VECES
      console.log("¡Has descargado un huevo!");
    } else if (dice === 3){
      //eliminar 1 rana: splice? de posición 0
      //comprobación de length array - cambiar mensaje por ejemplo
      //"¡Has descargado una rana!"
      //HAY QUE LIMITAR A 3 VECES
      console.log("¡Has descargado una rana!");
    } else if (dice === 4){
      //grogu avanza 1 casilla
      //"¡Grugo ha avanzado una casilla!" 
      //HAY QUE LIMITAR A 6 VECES
      console.log("¡Grugo ha avanzado una casilla!");
    }



    //comprobación game status: mirar length de cada array.

  
    //re-renderizar grogu en su casilla si cambia de posición y mercancía si ha cambiado

  }

  return (
    <section>
        <button className="dice" onClick={handleRollDice}>Lanzar Dado</button>{" "}
        {/* cuando sea el momento: desactivar este botón */}
        <div className="game-status">En curso</div>
    </section>
  )
}

export default Dice