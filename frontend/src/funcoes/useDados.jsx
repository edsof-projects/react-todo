import { useState, useEffect } from 'react';

export function useDados() {
  const [dados, setDados] = useState([]);

  const carregarDados = async () => {
    try {
      const response = await fetch('http://localhost:3001/todos');
      const data = await response.json();
      setDados(data.todos); // <-- aqui também
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setDados([]);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return { dados, carregarDados };
}
