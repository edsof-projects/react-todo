export async function getDados() {
  const response = await fetch('http://localhost:3001/todos');
  if (!response.ok) throw new Error('Erro ao carregar JSON');
  const data = await response.json();
  return data.todos; // <-- aqui pega o array correto
}
