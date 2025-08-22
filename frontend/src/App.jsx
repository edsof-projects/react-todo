import { useRef, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import styles from './App.module.css';
import { useDados } from './funcoes/useDados.jsx';
import { criarTarefa } from './funcoes/criarTarefa.jsx';
import { deletarTarefa } from './funcoes/deletarTarefa.jsx';


function App() {
  const { dados, carregarDados } = useDados();
  const containerRef = useRef(null);

  const adicionarTarefa = async ({ value, category }) => {
    await criarTarefa({ value, category });
    await carregarDados();
  };

  const handleDelete = async (id) => {
    const confirmar = window.confirm(`Deseja realmente excluir a tarefa com id : ${id}`);
    if (!confirmar) return;

    try {
      console.log(`verificando o id ${id}`)
      await deletarTarefa(id);
      await carregarDados();
    } catch (error) {
      alert('Erro ao deletar tarefa');
    }
  };
    
  // Scroll automático para o final da página mostrando o formulário - ao iniciar/atualizar dados
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [dados]); 

  console.log("Dados no App:", dados);

  return (
    <div className={styles.app} ref={containerRef}>
      <h1>Lista de Tarefas</h1>
      <div className={styles.todoList} >
        {Array.isArray(dados) && dados.map(item => (
          <Todo key={item.id} item={item} onDelete={handleDelete}/>
        ))}
      </div>
      <TodoForm criarTarefa={adicionarTarefa} />
    </div>
  );
}

export default App;
