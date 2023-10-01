import React, { useState } from 'react'
import Button from './Button'
import style from "./AddTaskModule.css"
function AddTask({addTodo}) {
  const [value,setvalue] = useState("")
  const [category,setcategory] = useState("")

  const preventform = (e) => {
    e.preventDefault();
    if(!value || !category)return;
    console.log(value,category)
    addTodo(value,category)
    setvalue("")
    setcategory("")
  }

  return (
    <div className='add-task'>
        <form onSubmit={preventform}>
          <h2>Adicionar tarefa:</h2>
            <input className='input' value={value} type="text" placeholder='digite o titulo'
             onChange={(e) => setvalue(e.target.value)}/>
            <select className='select' value={category} onChange={(e) => setcategory(e.target.value)}>
                <option value="">selecione categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudo</option>
            </select>
            <Button type ='submit' nome="Adicionar tarefa"/>
        </form>
    </div>
  )
}

export default AddTask