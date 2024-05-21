import "../styles/Dice.scss";
import PropTypes from "prop-types";

const Dice = ({ handleRollDice, gameStatus, isHiddenDice }) => {
  const handleDice = (ev) => {
    ev.preventDefault();
    handleRollDice();
  };

  return (
    <section className="section_dice" >
      <button className={`dice ${isHiddenDice ? 'hidden' : ''}`} onClick={handleDice}>
        Lanzar Dado
      </button>{" "}
      {/* cuando sea el momento: desactivar este botón */}  
      <div className="game-status">{gameStatus}</div>
    </section>
  );
};

Dice.propTypes = { handleRollDice: PropTypes.func };

export default Dice;
