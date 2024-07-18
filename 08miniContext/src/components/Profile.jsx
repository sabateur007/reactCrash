import React from 'react'
import { useContext } from 'react'
import usercontext from '../context/UserContext'

function Profile() {
    const {user} = useContext(usercontext) 
   
   if(!user)
   {
    return <div>please log in</div>
   }
   else{
    return <div>`{user.username} logged in`</div>
   }
}

export default Profile
