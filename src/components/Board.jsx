import Grogu from "./Grogu";
import "../styles/Board.scss";
import { useState } from "react";

const Board = ({groguPosition}) => {

  const [cells, setCells] = useState([null, null, null, null, null, null, null])

  const cellsBoard = cells.map((cell, index) => {
    if (index === groguPosition) {
      return (
        <div className="cell" key={index}>
          <Grogu />
        </div>
      );
    } else {
      return (
        <div className="cell" key={index}></div>
      );
    }
  });

  //setCells(cellsBoard)

  //solo pintar a grogu en la casilla cuyo index array cells === valor de grogu


  return (
    <section className="board">
            {cellsBoard}
    </section>
  )
}

export default Board