import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = ({ onProjectAdded }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Log para verificar os dados antes de enviar
    console.log('Enviando dados do projeto:', { nome, descricao });

    axios
      .post('http://localhost:5000/api/projetos', { nome, descricao }) // Requisição POST para criar o projeto
      .then((response) => {
        console.log('Novo Projeto Adicionado:', response.data); // Log da resposta
        onProjectAdded(response.data);  // Chama a função para adicionar o projeto à lista
        setNome('');  // Limpa o campo de nome
        setDescricao('');  // Limpa o campo de descrição
      })
      .catch((error) => console.error('Erro ao criar projeto:', error)); // Log de erro
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Nome do Projeto</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Descrição</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Adicionar Projeto
      </button>
    </form>
  );
};

export default ProjectForm;
