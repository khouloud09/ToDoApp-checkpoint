import React,{ useState } from 'react'
import {  useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import "./AddTask.css"

const AddTask = () => {
   
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState({title:""});
    const handleChange = (e) => {
      setNewTask({...newTask,title:e.target.value});
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addTodo(({...newTask,isDone:false,id:Math.floor(Math.random() * 10000000)})));
      setNewTask({title:""});
    };
  return (
    <div className='add-task'>
    <div className="addtask-header">
    <h1 className="todo-title">Todo App</h1>
</div>
<div className="addtask-container">
    <input value={newTask.title} type="text" onChange={(e) => handleChange(e)} placeholder='Create a new Todo...'></input>
    <button type="submit"  onClick={handleSubmit} className="btn-primary">+</button>
</div>
<div className='to-do'>

<button type="button" className="btn">Active</button>
<button type="button" className="btn">Completed</button>

<button type="button" className="btn">All</button>


</div>
</div>
  )
}

export default AddTask