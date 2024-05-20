import '../styles/FormName.scss'
import { useState } from 'react';

const FormName = ({setPlayer, player, toggleClass, isHidden}) => {

  const handleChange = (ev)=> {
    setPlayer(ev.target.value)
  }
 

  return (
    <form className={`form ${isHidden ? 'hiddenName' : ''}`} onSubmit={(ev)=>{ev.preventDefault()}}>
        <label htmlFor="name">Introduce tu nombre:</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={player}/>
        <button onClick={toggleClass} >Start!</button>
    </form>
  )
}

export default FormName