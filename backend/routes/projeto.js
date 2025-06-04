const express = require('express');
const Projeto = require('../models/Projeto'); // Importa o modelo Projeto
const router = express.Router();

// Rota para criar um novo projeto
router.post('/', async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const projeto = new Projeto({ nome, descricao });
    await projeto.save(); // Salva o projeto no banco de dados
    console.log('Projeto Criado:', projeto);  // Log do projeto criado
    res.status(201).json(projeto); // Retorna o projeto criado com status 201 (Created)
  } catch (err) {
    console.error("Erro ao criar projeto:", err.message); // Log do erro
    console.error(err.stack); // Log completo do erro (incluindo stack trace)
    res.status(400).json({ error: 'Erro ao criar o projeto', details: err.message }); // Retorna o erro
  }
});

// Rota para listar todos os projetos
router.get('/', async (req, res) => {
  try {
    const projetos = await Projeto.find(); // Busca todos os projetos no banco de dados
    res.json(projetos); // Retorna os projetos encontrados
  } catch (err) {
    console.error("Erro ao buscar projetos:", err.message); // Log do erro
    console.error(err.stack); // Log completo do erro (incluindo stack trace)
    res.status(500).json({ error: 'Erro ao buscar projetos', details: err.message }); // Retorna o erro
  }
});

// Rota para obter um projeto específico por ID
router.get('/:id', async (req, res) => {
  try {
    const projeto = await Projeto.findById(req.params.id); // Busca o projeto pelo ID
    if (!projeto) {
      return res.status(404).json({ error: 'Projeto não encontrado' }); // Caso o projeto não seja encontrado
    }
    res.json(projeto); // Retorna o projeto encontrado
  } catch (err) {
    console.error("Erro ao buscar o projeto:", err.message); // Log do erro
    console.error(err.stack); // Log completo do erro (incluindo stack trace)
    res.status(500).json({ error: 'Erro ao buscar o projeto', details: err.message }); // Retorna o erro
  }
});

module.exports = router;
