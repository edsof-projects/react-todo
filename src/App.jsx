import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import { getDados } from './funcoes/getDados.jsx';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    getDados()
      .then((data) => setDados(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {dados.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
