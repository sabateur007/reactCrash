import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=' p-4 bg-blue-400 text-xl-2'>To Do List</h1>
    </>
  )
}

export default App
