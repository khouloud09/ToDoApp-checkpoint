import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,editTodo } from '../redux/slices/todoSlice';
import "./Task.css"


const Task = ({todo}) => {
 const dispatch = useDispatch();
 const [update, setUpdate] = useState(false);
 const [newTodo,setNewTodo] = useState(todo)
  return (
    <div className="task" >
      
      {update
      ?<> <div className='update'><input type={"text"} defaultValue={todo.title} onChange={(e)=>setNewTodo({...newTodo,title:e.target.value})}/>
      <div className='btn'>
      <button  onClick={()=>{dispatch(editTodo(newTodo)); setUpdate(false)}}>Update</button>
      <button  onClick={()=>setUpdate(false)}>Cancel</button></div>
       </div>
       </>
      
      :<> <div className="task-description">
       
      <p>
        {todo.title}
      </p>
      <div className='btn-task'>
      <button onClick={()=> setUpdate(true)}>Edit</button>
      <button >Complete</button>
      <button onClick={()=> dispatch(deleteTodo(todo))}>Delete</button>
      </div>
     
      </div>
   
      </>
}
  </div>
  )
}

export default Task