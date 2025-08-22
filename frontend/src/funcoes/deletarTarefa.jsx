export const deletarTarefa = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar tarefa!');
    }

    const result = await response.json();
    console.log('Tarefa excluída com sucesso!:', result);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
