import Botao from '../Botao'
import styles from './TodoForm.module.css'

function TodoForm() {
  
  return (
    <div className={styles.todoform}>
      <h2>Criar Tarefa</h2>
      <form>
        <input type="text" placeholder='Digite o título'/>
        <select>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <Botao type="submit" texto="Criar Tarefa" />
      </form>
    </div>
  )
}

export default TodoForm
