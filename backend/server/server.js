import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 3001;

// Corrigir __dirname para ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_FILE = path.join(__dirname, 'dados.json');

app.use(cors());
app.use(express.json());

// GET - Retorna todas as tarefas
app.get('/todos', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  res.json(data);
});

// POST - Adiciona uma nova tarefa
app.post('/todos', (req, res) => {
  const novoTodo = req.body;

  if (!novoTodo || !novoTodo.text) {
    return res.status(400).json({ erro: 'Todo inválido' });
  }

  // Lê o JSON
  let dados = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

  // Gera ID aleatório
  novoTodo.id = Math.floor(Math.random() * 10000);

  // Adiciona dentro de "todos"
  dados.todos.push(novoTodo);

  // Salva de volta
  fs.writeFileSync(DATA_FILE, JSON.stringify(dados, null, 2));

  res.status(201).json({ mensagem: 'Todo adicionado', todo: novoTodo });
});




//DELETE - exclui uma tarefa
app.delete('/todos/:id', async (req, res) => {
  try {
    const id   = Number(req.params.id);
    const data = fs.readFile(DATA_PATH, 'utf-8');
    const json = JSON.parse(data);

    const originalLength = json.todos.length;
    json.todos = json.todos.filter(todo => todo.id !== id);

    if (json.todos.length === originalLength) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    await fs.writeFile(DATA_PATH, JSON.stringify(json, null, 2), 'utf-8');
    res.json({ message: 'Tarefa deletada com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor local rodando em http://localhost:${PORT}`);
});
