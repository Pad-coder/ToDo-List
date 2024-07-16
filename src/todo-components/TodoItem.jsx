import React, {useState} from 'react'
import '../CSS/TodoItem.css'

function TodoItem ({todo, index, updateTodo, deleteTodo}) 
{ const [isEditing, setIsEditing]= useState(false);
  const [name, setName]= useState(todo.name);
  const [description, setDescription]= useState(todo.description)

  const handleUpdate =()=>{
    updateTodo(index,{...todo,name, description});
    setIsEditing(false)
  };
  return<>
   <div >
    {isEditing ?(
        <div  className="list-box" >
          <div className='edit-bar'>
          <input type="text" className='edit-input'
          value={name}
          onChange={(e) => setName(e.target.value)}/>
           <input type="text" className='edit-input'
           value={description}
           onChange={(e) => setDescription(e.target.value)} />
           <button className='edit-add-btn' onClick={handleUpdate}>Save</button>
          </div>
        </div>
      ):(
        <div className="list-box" >
          <h3
          style={{textDecoration: todo.completed? 'line-through': ''}}>{todo.name}</h3>
          <p>{todo.completed? "":todo.description}</p>
          <div className='Btn-box'>
          <button className='Btn-status' onClick={()=> updateTodo(index,{...todo,
            completed: !todo.completed})}>
              {todo.completed? 'Undo' : 'Completed'}</button>
          <button className='edit' onClick={()=> setIsEditing(true)}>Edit</button>
          <button className='delete' onClick={()=> deleteTodo(index)}>Delete</button>
          </div>
          </div>
      )
    }
   </div>
  </>
}

export default TodoItem