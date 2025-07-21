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

// GET - Retorna todos os todos
app.get('/todos', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  res.json(data);
});

// POST - Adiciona um novo todo
app.post('/todos', (req, res) => {
  const novoTodo = req.body;

  if (!novoTodo || !novoTodo.text) {
    return res.status(400).json({ erro: 'Todo inválido' });
  }

  const dados = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  novoTodo.id = Math.floor(Math.random() * 10000);
  dados.push(novoTodo);

  fs.writeFileSync(DATA_FILE, JSON.stringify(dados, null, 2));
  res.status(201).json({ mensagem: 'Todo adicionado', todo: novoTodo });
});

app.listen(PORT, () => {
  console.log(`Servidor local rodando em http://localhost:${PORT}`);
});
