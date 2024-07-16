import React from 'react'
import TodoItem from './TodoItem'
import '../CSS/TodoItem.css'

function TodoList({todos,updateTodo,deleteTodo}) {
  return (
   <div className='todo-bar'>
    {todos.map((todo,index) => (
           <TodoItem
           key={index}
           todo={todo}
           index={index}
           updateTodo={updateTodo}
           deleteTodo={deleteTodo}
           />

         ))}
   </div>
  )
}

export default TodoList