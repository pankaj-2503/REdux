import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
  return (
     <>
      <div className='text-center'>Todos</div>
      <ul className='list-node'>
      {todos.map((todo)=>(
         <li key={todo.id} className="mt-4 flex justify-between item-center bg-zinc-800 px-4 py-2 rounded">
             <div className='text-white'>{todo.text}</div>
            <button onClick={()=>dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'>X</button>
         
         </li>
      ))}
      </ul>
     </>
  )
}

export default Todo