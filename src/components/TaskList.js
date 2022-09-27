import React from 'react'
import "./TaskList.css";
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div className='tasklist-container'>
         {todos.map((todo,i)=><Task key={i} todo={todo}/>)}
          </div>
    )
}

export default TaskList