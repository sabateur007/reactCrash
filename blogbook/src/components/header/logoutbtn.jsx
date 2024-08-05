import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function Logoutbtn() {
const dispatch = useDispatch()
const lougoutHandler = ()=>{
authService.logout().then(()=>{
dispatch(logout())}
)
}
    return (
        <button onClick={lougoutHandler}>logout</button>
    )
}


export default Logoutbtn
