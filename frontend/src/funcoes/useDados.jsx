import { useState, useEffect } from 'react';
import { getDados } from './getDados.jsx'; 

export function useDados() {
  const [dados, setDados] = useState([]);
  
  const carregarDados = async () => {
    try {
      const data = await getDados();
      setDados(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return { dados, carregarDados };
}
