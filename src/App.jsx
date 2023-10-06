import { useState,useEffect } from 'react';
import "./app.css";
import Todo from './components/Todo';
import AddTask from './components/AddTask';
import { Search } from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todo,setTodos] = useState([
    {
      id: 1,
      text: "exemplo",
      category: "trabalho",
      inCompleted: false,
    },
  ])

    
  const addTodo = (text,category) => {

    const newTask = [
      ...todo,
      {
    id:Math.floor(Math.random() * 10000),
    text,
    category,
    inCompleted: false
    },
  ]
    setTodos(newTask)
  }

  const [search,setSearch] = useState("")

  const [filter,setFilter] = useState("all")
  const [sort,setSort] = useState("Asc")

  const removeTodo = (id) => {
    const newTask =[...todo]
    const filtered = newTask.filter(todo => todo.id !==id ? todo : null)
  
      setTodos(filtered)
  }

  const completTodo = (id) =>{
    const newTask =[...todo]
    newTask.map((todo) => todo.id === id ? todo.inCompleted = !todo.inCompleted : todo)
    setTodos(newTask)
  }

 return (
  <div className='app'>
    <h1>lista de tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter ={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
    <div className='todo-list'>
      {todo
      .filter((todo)=> filter === "All"
      ? true : filter === "complete"
      ? todo.inCompleted 
      : !todo.inCompleted )
      .filter((todo)=> todo.text.toLocaleLowerCase().includes(search.toLowerCase())
      )
      .sort((a,b) => sort === "Asc"
       ? a.text.localeCompare(b.text)
       :b.text.localeCompare(a.text) 
       )
      .map((todo) => (
        <Todo key={todo.id} Todo = {todo} removeTodo={removeTodo} completTodo={completTodo}/>
      ))}
    </div>
    <AddTask addTodo = {addTodo}/>
  </div>
  )
}

export default App
