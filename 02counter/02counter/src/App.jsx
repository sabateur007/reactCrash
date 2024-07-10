import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setcounter] = useState(10)

const addcounter = ()=>{
  setcounter(counter+=1)
  console.log(`clicked and counter increased to ${counter}`)
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>count is {counter}</h2>
      <button onClick={addcounter}>increment counter {counter}</button>
      <br />
      <button>decrment counter {counter}</button>

    </>
  )
}

export default App
