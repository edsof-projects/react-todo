import { useRef, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import styles from './App.module.css';
import { useDados } from './funcoes/useDados.jsx';
import { criarTarefa } from './funcoes/criarTarefa.jsx';

function App() {
  const { dados, carregarDados } = useDados();
  const containerRef = useRef(null);

  const adicionarTarefa = async ({ value, category }) => {
    await criarTarefa({ value, category });
    await carregarDados();
  };

  // Scroll automático para o final ao atualizar dados
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [dados]);

  return (
    <div className={styles.app} ref={containerRef}>
      <h1>Lista de Tarefas</h1>
      <div className={styles.todoList} >
        {dados.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </div>
      <TodoForm criarTarefa={adicionarTarefa} />
    </div>
  );
}

export default App;
