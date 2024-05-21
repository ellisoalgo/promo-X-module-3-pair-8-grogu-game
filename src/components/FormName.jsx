import '../styles/FormName.scss'
import { useState } from 'react';

const FormName = ({setPlayer, player, isHidden, setIsHidden, setIsHiddenDice, setGameStatus}) => {

  const handleChange = (ev)=> {
    setPlayer(ev.target.value)
  }
  
  const handleClick = () =>{
    setIsHidden(true);
    setIsHiddenDice(false)
    setGameStatus(`¡Empezamos, ${player}!`)
  }

  return (
    <form className={`form ${isHidden ? 'hidden' : ''}`} onSubmit={(ev)=>{ev.preventDefault()}}>
        <label htmlFor="name">Introduce tu nombre:</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={player}/>
        <button onClick={handleClick} >Start!</button>
    </form>
  )
}

export default FormName