import Board from "./Board";
import Dice from "./Dice";
import Container from "./Container";
import BtnReset from "./BtnReset";
import FormName from "./FormName";
import { useEffect, useState } from "react";

const Main = () => {

    //Crear funciones de estado
  const [grogu, setGrogu] = useState(0); //Es un 0 porque es la posición de índice de dónde estará en la matriz
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [dice, setDice] = useState(null); //OJO: es un null (sin valor) pero luego tendrá valor numérico, almacenará el número random
  const [gameStatus, setGameStatus] = useState("En curso");
  const [player, setPlayer] = useState("");
  const [isHidden, setIsHidden] = useState(false); //clase hidden name
  const [isHiddenDice, setIsHiddenDice] = useState(true);

  //   function getRandomNumber(max) {
  //     max = 4;
  //     return Math.ceil(Math.random() * max);
  //   }
  useEffect(() => {
    if (grogu === 6) {
      setGameStatus(`¡Has perdido, ${player}!`);
      setIsHiddenDice(true)
      //desactivar botones
    } else if (
      cookies.length === 0 &&
      eggs.length === 0 &&
      frogs.length === 0
    ) {
      setGameStatus(`¡Has ganado, ${player}!`);
      setIsHiddenDice(true)
    }
  }, [grogu, cookies, eggs, frogs]);

  const handleRollDice = () => {
    const dice = Math.floor(Math.random() * 4);
    //setDice(value);
    console.log(dice);

    if (dice === 0) {
      const copyCookies = [...cookies];
      copyCookies.splice(0, 1);
      setCookies([...copyCookies]);
      setGameStatus(`¡Has descargado una galleta, ${player}!`);
      console.log("¡Has descargado una galleta!");
      if (cookies.length === 0) {
        setGameStatus(
          `Ya no te quedan más 🍪, ${player}, tira el dado de nuevo.`
        );
      }
    } else if (dice === 1) {
      const copyEggs = [...eggs];
      copyEggs.splice(0, 1);
      setEggs([...copyEggs]);
      setGameStatus(`¡Has descargado un huevo, ${player}!`);
      console.log("¡Has descargado un huevo!");
      if (eggs.length === 0) {
        setGameStatus(
          `Ya no te quedan más 🥚, ${player}, tira el dado de nuevo.`
        );
      }
    } else if (dice === 2) {
      const copyFrogs = [...frogs];
      copyFrogs.splice(0, 1);
      setFrogs([...copyFrogs]);
      setGameStatus(`¡Has descargado una rana, ${player}!`);
      console.log("¡Has descargado una rana!");
      if (frogs.length === 0) {
        setGameStatus(
          `Ya no te quedan más 🐸, ${player}, tira el dado de nuevo.`
        );
      }
    } else if (dice === 3) {
      setGrogu(grogu + 1); //añadir 1 al valor de grogu
      setGameStatus(`¡Cuidado, ${player}, Grugo ha avanzado una casilla!`);
      console.log("¡Grugo ha avanzado una casilla!");
    }
    console.log("has ejecutado la func");
  };

  //función de reseteo total
  const restartGame = () => {
    setGrogu(0);
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);
    setFrogs(["🐸", "🐸", "🐸"]);
    setDice(null);
    setGameStatus(`Vuelve a loguear!`);
    setIsHidden(false)
    setPlayer("");
    setIsHiddenDice(true);
  };

  return (
    <main className="page">
            <FormName
            setPlayer={setPlayer}
            player={player}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
            setIsHiddenDice={setIsHiddenDice}
            setGameStatus={setGameStatus}
          />
          <Board groguPosition={grogu} />
          <Dice
            handleRollDice={handleRollDice}
            gameStatus={gameStatus}
            isHiddenDice={isHiddenDice}
            setIsHiddenDice={setIsHiddenDice}
          />
          <Container cookies={cookies} eggs={eggs} frogs={frogs} />
          <BtnReset restartGame={restartGame} />
     </main>
  )
}

export default Main