const express = require('express');
const mongoose = require('mongoose');
const projetoRoutes = require('./routes/projeto'); // Importa as rotas de projetos

const app = express();
const PORT = 5000;

app.use(express.json()); // Para que o Express entenda JSON no corpo da requisição

// Conecta ao MongoDB
mongoose.connect('mongodb://localhost:27017/gerenciamento', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // Aumenta o timeout para 30 segundos
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => {
  console.log('Erro ao conectar ao MongoDB:', err.message);
});


// Usando as rotas de projeto
app.use('/api/projetos', projetoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
