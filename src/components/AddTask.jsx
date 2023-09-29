import React from 'react'

function AddTask() {
  return (
    <div className='add-task'>
        <form>
            <input type="text" placeholder='digite o titulo' />
            <select>
                <option value=""></option>
                <option value="Trabalho"></option>
                <option value="Pessoal"></option>
                <option value="Estudos"></option>
            </select>
            <button>Criar tarefa</button>
        </form>
    </div>
  )
}

export default AddTask