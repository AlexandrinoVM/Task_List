import { useState } from 'react';
import "./app.css";
import Todo from './components/Todo';
import AddTask from './components/AddTask';

function App() {
  const [todo,setTodos] = useState([
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
      {todo.map((todo) => (
        <Todo key={todo.id} Todo = {todo}/>
      ))}
    </div>
    <AddTask />
  </div>
  )
}

export default App
