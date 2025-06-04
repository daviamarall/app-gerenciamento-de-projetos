import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ projectId, onTaskAdded }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prazo, setPrazo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/tarefas', {
        nome,
        descricao,
        prazo,
        projeto: projectId,
      })
      .then((response) => {
        onTaskAdded(response.data);
        setNome('');
        setDescricao('');
        setPrazo('');
      })
      .catch((error) => console.error('Erro ao criar tarefa:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Nome da Tarefa</label>
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
      <div>
        <label className="block font-semibold">Prazo</label>
        <input
          type="date"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Adicionar Tarefa
      </button>
    </form>
  );
};

export default TaskForm;
