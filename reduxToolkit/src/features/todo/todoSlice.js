import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
    {id: 1,
    todotext : "this is a task to do"}
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        
         addTodo: (state, action)=>{
            const todo = {
                id : nanoid(),
                todotext : action.payload
            }   
            state.todos.push(todo);
         },
         removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id!==action.payload)
         },
         updateTodo: (state, action)=>{
            const { id, todotext } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo)
             {
                todo.todotext = todotext;
             }
         }

    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer
