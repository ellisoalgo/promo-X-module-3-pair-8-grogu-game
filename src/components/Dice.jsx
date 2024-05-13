import "../styles/Dice.scss";
import PropTypes from "prop-types";

const Dice = ({ handleRollDice }) => {
  const handleDice = (ev) => {
    ev.preventDefault();
    handleRollDice();
  };

  return (
    <section>
      <button className="dice" onClick={handleDice}>
        Lanzar Dado
      </button>{" "}
      {/* cuando sea el momento: desactivar este botón */}
      <div className="game-status">En curso</div>
    </section>
  );
};

Dice.propTypes = { handleRollDice: PropTypes.func };

export default Dice;
