import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [MissingTimer, setMissingTimer] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setMissingTimer(new Date("1/1/2025").getTime() - Date.now());
    }, 1000)
  }, [MissingTimer])

  return (
    <>
      <div  className={"info" + (MissingTimer == 0 ? ' nuevo' : '')}>
        <p> D:{Math.floor(MissingTimer / (1000 * 60 * 60 * 24))}</p>
        <p>H: {Math.floor(MissingTimer / (1000 * 60 * 60) % 24)}</p>
        <p>M: {Math.floor((MissingTimer / 1000 / 60) % 60)}</p>
        <p>S: {Math.floor((MissingTimer / 1000 ) % 60)}</p>
      </div>
    </>
  )
}

export default App
