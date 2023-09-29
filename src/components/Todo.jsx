import React from 'react'

 const Todo =({Todo}) => {
  return (
    
        <div className='todo'>
          <div className='content'>
            <p>{Todo.text}</p>
            <p className='category'>
              ({Todo.category})
            </p>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        </div>
  )
}
export default Todo