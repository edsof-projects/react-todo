import { useState } from 'react';
import Botao from '../Botao';
import styles from './TodoForm.module.css';
import Upper from '../../funcoes/handleToUppercase'
import handleToUppercase from '../../funcoes/handleToUppercase';

function TodoForm({ criarTarefa }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value || !category) return;
    
    await criarTarefa({ value, category });

    setValue("");
    setCategory("");
  };

  return (
    <div className={styles.todoform}>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Digite o título"
          onChange={(e) => setValue(handleToUppercase(e.target.value))}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <Botao type="submit" texto="Criar Tarefa" />
      </form>
    </div>
  );
}

export default TodoForm;
