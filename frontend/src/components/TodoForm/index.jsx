import { useState } from 'react'
import Botao from '../Botao'
import styles from './TodoForm.module.css'


function TodoForm( {criarTarefa} ) {
  const [value, setValue]       = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    //se tiver algum campo vazio nao faz nada
    if(!value || !category) return

    // se os campos estiverem preenchidos adicionar todo
    criarTarefa(value, category)

    // limpar campos
    setValue("")
    setCategory("")
  }

  return (
    <div className={styles.todoform}>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder='Digite o título' onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <Botao type="submit" texto="Criar Tarefa" criarTarefa={criarTarefa}/>
      </form>
    </div>
  )
}

export default TodoForm
