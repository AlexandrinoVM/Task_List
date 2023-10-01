import React from 'react'
import Button from './Button'
import style from "./ButtonModule.css?inline"
 const Todo =({Todo}) => {
  return (
          <div className='todo'>
          <div className='content'>
            <p>{Todo.text}</p>
            <p className='category'>
              ({Todo.category})
            </p>
            <div>
              <Button className={'complete'} type='submit' nome='completar'/><Button className={'remove'} type='submit' nome='x'/>
            </div>
          </div>
        </div>
  )
}
export default Todo