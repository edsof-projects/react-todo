//Função auxiliar que insere novos dados no arquivo JSON

export async function criarTarefa() {
  const response = await fetch('/dados.json');
  if (!response.ok) {
    throw new Error('Erro ao carregar JSON');
  }
  const data = await response.json();

  const addTodo = {         
    id: Math.floor(Math.random() * 10000),
    text : "correr",
    category: "teste",
    isCompleted: false
  }
  const UpdateData = [...data, addTodo]
  console.log(UpdateData)
  return UpdateData;
}
