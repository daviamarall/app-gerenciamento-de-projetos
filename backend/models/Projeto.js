const mongoose = require('mongoose');

// Definindo o schema para o Projeto
const projetoSchema = new mongoose.Schema({
  nome: { type: String, required: true },  // Nome do projeto
  descricao: { type: String },              // Descrição do projeto
  dataCriacao: { type: Date, default: Date.now },  // Data de criação do projeto
});

// Criando o modelo de Projeto
const Projeto = mongoose.model('Projeto', projetoSchema);

// Exportando o modelo
module.exports = Projeto;
