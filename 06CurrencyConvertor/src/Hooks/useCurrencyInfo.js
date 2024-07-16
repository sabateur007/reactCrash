import {useEffect, UseEffect, useState, UseState} from "react"

function useCurrencyInfo(currency){
    const [data,setdata] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        
    fetch(url).then((res)=>res.json()).then((res)=>setdata(res[currency]))
    },[currency]);
    return data
}

export default useCurrencyInfo;