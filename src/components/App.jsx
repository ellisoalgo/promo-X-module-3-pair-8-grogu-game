import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";

import Dice from "./Dice";
import Container from "./Container";
import BtnReset from "./BtnReset";

function App() {
  //Crear funciones de estado
  const [grogu, setGrogu] = useState(0); //Es un 0 porque es la posición de índice de dónde estará en la matriz
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [dice, setDice] = useState(null); //OJO: es un null (sin valor) pero luego tendrá valor numérico, almacenará el número random
  const [gameStatus, setGameStatus] = useState("En curso");

//   function getRandomNumber(max) {
//     max = 4;
//     return Math.ceil(Math.random() * max);
//   }

  const handleRollDice = () => {
   const value = Math.floor(Math.random() * 4);
    setDice(value);
    console.log(dice);

    if (dice === 1) {
      //eliminar 1 galleta: splice? de posición 0
      //comprobación de length array - cambiar mensaje por ejemplo
      //"¡Has descargado una galleta!"
      //HAY QUE LIMITAR A 3 VECES
      console.log("¡Has descargado una galleta!");
    } else if (dice === 2) {
      //eliminar 1 huevo: splice? de posición 0
      //comprobación de length array - cambiar mensaje por ejemplo
      //"¡Has descargado un huevo!"
      //HAY QUE LIMITAR A 3 VECES
      console.log("¡Has descargado un huevo!");
    } else if (dice === 3) {
      //eliminar 1 rana: splice? de posición 0
      //comprobación de length array - cambiar mensaje por ejemplo
      //"¡Has descargado una rana!"
      //HAY QUE LIMITAR A 3 VECES
      console.log("¡Has descargado una rana!");
    } else if (dice === 4) {
      //grogu avanza 1 casilla
      //"¡Grugo ha avanzado una casilla!"
      //HAY QUE LIMITAR A 6 VECES
      console.log("¡Grugo ha avanzado una casilla!");
    }
   
    //comprobación game status: mirar length de cada array.

    //re-renderizar grogu en su casilla si cambia de posición y mercancía si ha cambiado
  };

  return (
    <>
      <div className="page">
        <Header />
        <main className="page">
          <Board />
          <Dice handleRollDice={handleRollDice} />
          <Container />
          <BtnReset />
        </main>
      </div>
    </>
  );
}

export default App;
