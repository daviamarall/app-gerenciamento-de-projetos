const express = require('express');
const Tarefa = require('../models/Tarefa');
const router = express.Router();

// Rota para criar uma nova tarefa
router.post('/', async (req, res) => {
  const { nome, descricao, prazo, projeto } = req.body;
  try {
    const tarefa = new Tarefa({ nome, descricao, prazo, projeto });
    await tarefa.save();
    res.status(201).json(tarefa); // Retorna a tarefa criada
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar a tarefa' });
  }
});

// Rota para listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tarefas = await Tarefa.find().populate('projeto'); // Popula os dados do projeto junto com a tarefa
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
});

// Rota para obter uma tarefa específica por ID
router.get('/:id', async (req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id).populate('projeto');
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar a tarefa' });
  }
});

module.exports = router;
