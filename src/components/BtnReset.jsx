import "../styles/BtnReset.scss";

const BtnReset = ({restartGame}) => {
    const handleClick = () => {
        restartGame()
    }
  return (
    <section>
        <button className="restart-button" onClick={handleClick}>Reiniciar Juego</button>
    </section>
  )
}

export default BtnReset