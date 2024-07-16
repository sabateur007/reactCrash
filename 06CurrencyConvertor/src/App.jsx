import { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import './App.css'
import {Input} from './components/Index'

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

  const convert = ()=>{
    setConvertedAmount(amount * CurrencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://www.pexels.com/photo/silver-and-brown-round-coins-157520/')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount = {amount}
                            CurrencyOptions = {toCurrencyOptions}
                            onCurrencyChange = {(currency)=> setAmount(amount)}
                            selectcurrency = {from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount = {convertedAmoumt}
                            CurrencyOptions = {toCurrencyOptions}
                            onCurrencyChange = {(currency)=> setTo(currency)}
                            selectcurrency = {to}
                            amountdisable = {true}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toLowerCase()} to {to.toLowerCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
