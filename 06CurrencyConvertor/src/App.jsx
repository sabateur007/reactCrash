import { useState } from 'react'
import useCurrencyInfo from './Hooks/usercurrencyinfo'
import './App.css'
import {Input} from './components/Input'
import useCurrencyInfo from './Hooks/usercurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmoumt, setConvertedAmount] = useState(0)
  const CurrencyInfo = useCurrencyInfo(from)
  const toCurrencyOptions = Object.keys(CurrencyInfo)

const swap=()=>
  {
    let temp;
    temp = setFrom(from);
     setFrom(to);
      setTo(temp);
      setConvertedAmount(amount);
      setAmount(convertedAmoumt);
      return null
  }

  


  return (
    <>
     <h1 className='bg-green-500 text-3xl text-blue text-center my-3'>currency convertor</h1>
    </>
  )
}

export default App
