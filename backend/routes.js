const express = require('express');
const Projeto = require('../models/Projeto');
const router = express.Router();

// Rota para criar um novo projeto
router.post('/', async (req, res) => {
  const { nome, descricao } = req.body;
  try {
    const projeto = new Projeto({ nome, descricao });
    await projeto.save();
    res.status(201).json(projeto); // Retorna o projeto criado
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar o projeto' });
  }
});

// Rota para listar todos os projetos
router.get('/', async (req, res) => {
  try {
    const projetos = await Projeto.find(); // Busca todos os projetos
    res.json(projetos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
});

// Rota para obter um projeto específico por ID
router.get('/:id', async (req, res) => {
  try {
    const projeto = await Projeto.findById(req.params.id);
    if (!projeto) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    res.
