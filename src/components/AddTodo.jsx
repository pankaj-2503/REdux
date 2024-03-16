import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import addTodo from "../features/todo/todoSlice"
const AddTodo = () => {
    const [input,setInput]=useState("");
    const dispatch=useDispatch();
    
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("");
    }
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12 text-center mx-6'>
        <input type="text" placeholder="Enter text to add todo" className='bg-gray-400 rounded border-gray-700  focus:border-indigo-500 focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className='bg-blue-600 rounded py-1 px-3'>Add Todo</button>

    </form>
  )
}

export default AddTodo