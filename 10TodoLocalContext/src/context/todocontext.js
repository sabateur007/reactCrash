import { useContext, createContext } from "react";

export const toDoContext = createContext({
    todos: [
        {
            id:1,
            todotitle: "to do tile here",
            checkmark: false,
        }, 
    ],
    addToDo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    togglecheckmark: (id)=>{}
})

export const toDoContextProvider = toDoContext.Provider

export const useTodoContext = ()=>{
    return useContext(toDoContext);
}