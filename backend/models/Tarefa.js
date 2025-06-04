const mongoose = require('mongoose');

// Definindo o schema para Tarefa
const tarefaSchema = new mongoose.Schema({
  nome: { type: String, required: true },  // Nome da tarefa
  descricao: { type: String },              // Descrição da tarefa
  status: { type: String, enum: ['pendente', 'em andamento', 'concluída'], default: 'pendente' },  // Status da tarefa
  prazo: { type: Date },                    // Prazo da tarefa
  projeto: { type: mongoose.Schema.Types.ObjectId, ref: 'Projeto' },  // Relacionamento com o Projeto
});

// Criando o modelo de Tarefa
const Tarefa = mongoose.model('Tarefa', tarefaSchema);

// Exportando o modelo
module.exports = Tarefa;
