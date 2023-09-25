import { useState } from 'react';
import "./app.css";

function App() {
  const [todos,setTodos] = useState([
    {
      id: 1,
      text: "ir para a faculdade",
      category: "trabalho",
      inCompleted: false,
    },
    {
      id: 2,
      text: "dormir",
      category: "descanso",
      inCompleted: false,
    },
    {
      id: 3,
      text: "fazer compras",
      category: "alimentacap",
      inCompleted: false,
    },
    
  ])
 return (
  <div className='app'>
    <h1>lista de tarefas</h1>
    <div className='todo-list'>
      {todos.map((todos) => (
        <div className='todos'>
          <div className='content'>
            <p>{todos.text}</p>
            <div className='category'>
              <p>({todos.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default App
