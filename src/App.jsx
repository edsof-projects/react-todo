import { useState } from 'react'
import './App.css'
import Botao from './components/Botao'
import BotaoDel from './components/BotaoDel'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho", 
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal", 
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos", 
      isCompleted: false
    }
  ])

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">        
          {
            todos.map((todo)=> (
              <div className="todo">
                <div className="content">
                  <p>{todo.text}</p>
                  <p>({todo.category})</p>
                </div>
                <div className="acoes">
                  <Botao texto="Completar"></Botao>
                  <BotaoDel texto="X"></BotaoDel>
                </div>
              </div>
            ))
          }        
      </div>
    </div>
  )
}

export default App
