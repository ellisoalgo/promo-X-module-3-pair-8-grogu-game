import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Container from "./Container";
import BtnReset from "./BtnReset";
import FormName from "./FormName";

function App() {
  //Crear funciones de estado
  const [grogu, setGrogu] = useState(0); //Es un 0 porque es la posición de índice de dónde estará en la matriz
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [dice, setDice] = useState(null); //OJO: es un null (sin valor) pero luego tendrá valor numérico, almacenará el número random
  const [gameStatus, setGameStatus] = useState("En curso");
  const [player, setPlayer] = useState("");
  const [isHidden, setIsHidden] = useState(false); //clase hidden


//   function getRandomNumber(max) {
//     max = 4;
//     return Math.ceil(Math.random() * max);
//   }

  const handleRollDice = () => {
   const value = Math.floor(Math.random() * 4);
    setDice(value);
    console.log(dice);

    if (dice === 0) {
      const copyCookies = [...cookies]
      copyCookies.splice(1,1)
      setCookies([...copyCookies])
      //comprobación de length array - cambiar mensaje por ejemplo
      //HAY QUE LIMITAR A 3 VECES
      setGameStatus(`¡Has descargado una galleta, ${player}!`)
      console.log("¡Has descargado una galleta!");
    } else if (dice === 1) {
      const copyEggs = [...eggs]
      copyEggs.splice(1,1)
      setEggs([...copyEggs])
      //comprobación de length array - cambiar mensaje por ejemplo
      //HAY QUE LIMITAR A 3 VECES
      setGameStatus(`¡Has descargado un huevo, ${player}!`)
      console.log("¡Has descargado un huevo!");
    } else if (dice === 2) {
      const copyFrogs = [...frogs]
      copyFrogs.splice(1,1)
      setFrogs([...copyFrogs])
      //comprobación de length array - cambiar mensaje por ejemplo
      //HAY QUE LIMITAR A 3 VECES
      setGameStatus(`¡Has descargado una rana, ${player}!`)
      console.log("¡Has descargado una rana!");
    } else if (dice === 3) {
      //cuando grogu === 6 -> apagar boton lanzar dado
      setGrogu(grogu +1) //añadir 1 al valor de grogu
      setGameStatus(`¡Cuidado, ${player}, Grugo ha avanzado una casilla!`)
      console.log("¡Grugo ha avanzado una casilla!");
    }
    //comprobación game status: mirar length de cada array.

  };

  const toggleClass = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className="page">
        <Header />
        <main className="page">
          <FormName setPlayer={setPlayer} player={player} toggleClass={toggleClass}/>
          <Board groguPosition={grogu}/>
          <Dice handleRollDice={handleRollDice} gameStatus={gameStatus} isHidden={isHidden}/>
          <Container cookies={cookies} eggs={eggs} frogs={frogs}/>
          <BtnReset />
        </main>
      </div>
    </>
  );
}

export default App;
