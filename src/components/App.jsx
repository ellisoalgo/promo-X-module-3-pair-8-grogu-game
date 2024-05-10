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

  return (
    <>
      <div className="page">
        <Header/>
        <main className="page">
          <Board/>
          <Dice />
          <Container/>
          <BtnReset/>
        </main>
      </div>
    </>
  );
}

export default App;
