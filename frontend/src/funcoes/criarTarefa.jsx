
export async function criarTarefa({ value, category }) {  
  const response = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: value,
      category: category,
      isCompleted: false,
    }),
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar tarefa');
  }

  const result = await response.json();
  //console.log('Tarefa adicionada:', result);
}
