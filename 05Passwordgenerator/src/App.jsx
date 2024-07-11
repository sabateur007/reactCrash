import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const[passwordLength, setpasswordLength] = useState(8);
  const[numbersallow, setnumbersallow] = useState(true);
  const[charsallow, setcharsallow] = useState(true);
  const[password, setpassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    
    if(numbersallow) str+="0123456789"
    if(charsallow)  str+="!@#$%^&*=+-"
    for(let i=1;i<=passwordLength;i++)
    {
      let charposition = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(charposition)
    }
    setpassword(pass) 
  },[passwordLength,numbersallow,charsallow,setpassword])


  useEffect(()=>{passwordGenerator()},[passwordLength,numbersallow,charsallow,passwordGenerator])
  

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>password generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        />
        <button className='outline-none bg-blue-500 text-white mx-0 px-3 '>copy</button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={25}
          value={passwordLength}
          className='cursor-pointer'
          onChange={(e)=>setpasswordLength(e.target.value)}
          />
          <label>Length:{passwordLength}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked= {numbersallow}
          id='numberInput'
          onChange={()=>{setnumbersallow((prev)=>!prev)}}
          />
          <label>numbers allowed</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked= {charsallow}
          id='numberInput'
          onChange={()=>{setcharsallow((prev)=>!prev)}}
          />
          <label>characters allowed</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
