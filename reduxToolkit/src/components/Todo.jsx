import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {
  const [editMode, setEditMode] = useState(null)
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  
  return (
    <>
    
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.todotext}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >delete
            </button>

            <button
              onClick={() => {
                // Toggle edit mode for this todo item
                // You can use a separate state variable or a flag in the todo item itself
                // For simplicity, I'll use a separate state variable
                setEditMode(todo.id);
              }}
              className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
            >
              edit
            </button>
            {editMode === todo.id && (
              <input
                type="text"
                value={todo.todotext}
                onChange={(e) => {
                  // Update the todo text in the state
                  const updatedTodoText = e.target.value;
                  dispatch(updateTodo({ id: todo.id, todotext: updatedTodoText }));
                }}
              />
            )}
            
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos