//Função auxiliar que recebe os dados do arquivo JSON

export async function getDados() {
  const response = await fetch('/dados.json');
  if (!response.ok) {
    throw new Error('Erro ao carregar JSON');
  }
  const data = await response.json();
  return data;
}
