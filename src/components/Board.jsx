import Grogu from "./Grogu";
import "../styles/Board.scss";

const Board = () => {
  return (
    <section className="board">
            <div className="cell">
            <Grogu/>
            </div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
    </section>
  )
}

export default Board