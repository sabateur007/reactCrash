import { useEffect, useState } from 'react'
import './App.css'
import {toDoContextProvider} from "./context"

function App() {
 const [Todos, setTodos] = useState([])

 const addTodo = (todo)=>{
  setTodos((prev)=>[{id : Date.now(), ...todo}, ...prev])
 }

 const updatetodo =(id, todo)=>{
 setTodos((prev)=>prev.map((prevtodo)=>prevtodo===id?todo:prevtodo))
 }

//  const updateTodo = (id, newTodo) => {
//   setTodos((previousTodos) => 
//  {
//     const updatedTodos = [];
//     for (const todo of previousTodos) 
//      {
//       if (todo.id === id)
//         {
//         updatedTodos.push(newTodo);
//         } 
//        else
//         {
//         updatedTodos.push(todo);
//         }
//       }
//     return updatedTodos;
//   });
// };

const deletetodo = (id)=>{
setTodos((prev)=>{
  const afterdeletiontodos = [];
  for(const todo of prev)
    {
    if(todo.id === id)
      continue
    else
    afterdeletiontodos.push(todo);
  }
  return afterdeletiontodos;
})
}

const togglecheckmark = (id)=>{
  setTodos((prev)=>prev.map((eachprev)=>eachprev === id? {...eachprev, checkmark: !eachprev.checkmark} : eachprev ))
}

useEffect(()=>{
 const getTodosLocal = JSON.parse(localStorage.getItem("Todos")) 
 if(getTodosLocal && getTodosLocal.length>0)
 {
  setTodos(getTodosLocal);
 }
},[])

useEffect(()=>{
localStorage.setItem("Todos", JSON.stringify(Todos))
},[Todos])

  return (
    <toDoContextProvider value={{Todos, addToDo, updatetodo, deletetodo, togglecheckmark}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
        </div>
    </div>
    </div>
    </toDoContextProvider>
  )
}

export default App
