import {useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header, Footer} from './components'
import './App.css'

function App() {
const [loading, setLoading] =  useState(true);
console.log(loading);
const dispatch = useDispatch()
// useEffect(()=>{
//   const fetchCurrectUser = async ()=>{
//     console.log("inside fetch current user")
//     try{
//       console.log("trying to run appwrite service")
//       const currentUser = await authService.getCurrentUser();
//       if(currentUser)
//       {
//         console.log("user found")
//           dispatch(login(currentUser))
//       }
//       else{
//           dispatch(logout())
//           console.log("no user logged in")
//       }
//     }
//     catch (error) {
//         console.log("Appwrite serive :: getCurrentUser :: error", error);
//     }
//     setLoading(false);
//   }
  
//   console.log(loading)
// },[])

useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))
}, [])


  
if(!loading){
  return(
    <>
   <Header />
   <div>main</div>
   <Footer />
    </>
  )
}
else{
  return(
    <>
    <h1>cant load the app</h1>
    </>
  )
}
}

export default App
