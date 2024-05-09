import { useState } from "react";
import "../styles/App.scss";

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
        <header>
          <h1>¡Cuidado con Grogu!</h1>
        </header>
        <main className="page">
          <section className="board">
            <div className="cell">
              <div className="grogu">👣</div>
            </div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </section>

          <section>
            <button className="dice">Lanzar Dado</button>{" "}
            {/* cuando sea el momento: desactivar este botón */}
            <div className="game-status">En curso</div>
          </section>

          <section className="goods-container">
            <div className="goods-item">🍪</div>
            <div className="goods-item">🍪</div>
            <div className="goods-item">🍪</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
          </section>
          <section>
            <button className="restart-button">Reiniciar Juego</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
