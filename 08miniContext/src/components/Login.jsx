import React from 'react'
import { useState, useContext } from 'react'
import usercontext from '../context/UserContext'


function Login() {

    <h2>LOGIN HERE</h2>
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setuser} = useContext(usercontext)
    const handlesubmmit=(e)=>{
        e.preventdefault;
        setuser({username,password})
    }
    return (
        <>
        <div>
            <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'></input>
            <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'></input>
            <button type='submit' onClick={handlesubmmit}>submit</button>
        </div>
        </>
    )
}

export default Login
