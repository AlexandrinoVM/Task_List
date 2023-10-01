import React from 'react'
import Button from './Button'

import style from "./ButtonModule.css?inline"
import "./TodoModule.css"

 const Todo =({Todo,removeTodo,completTodo}) => {
  return (
          <div className='todo' style={{textDecoration: Todo.inCompleted ? "line-through" : ""}}>
          <div className='content'>
            <p>{Todo.text}</p>
            <p className='category'>
              ({Todo.category})
            </p>
            <div className='todo-button'>
            <button onClick={()=> completTodo(Todo.id)} className={'complete'}>completar</button>
            <button onClick={()=> removeTodo(Todo.id)} className={'remove'}>x</button>
            </div>
          </div>
        </div>
  )
}
export default Todo