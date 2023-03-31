import { useState } from 'react'
import './App.css'
import Time from './components/Time'
import Mor from './components/mor'

const playerX = prompt("player X:")
const playerO = prompt("player O:")

function App() {

  const [Count, setCount] = useState("O")

  return (
    <div className="App">
      <Time />
      <label>C'est au tour du joueur <name className={Count}>{Count==="O"?playerO:playerX}</name> de jouer</label>
      <div className='mor'>
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
        <Mor userCount={Count} setuserCount={setCount} />
      </div>
    </div>
  )
}

export default App
