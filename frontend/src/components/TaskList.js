import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (projectId) {
      axios
        .get(`http://localhost:5000/api/tarefas?projeto=${projectId}`)
        .then((response) => setTasks(response.data))
        .catch((error) => console.error('Erro ao buscar tarefas:', error));
    }
  }, [projectId]);

  return (
    <div>
      <h3 className="text-xl font-bold">Tarefas do Projeto</h3>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-semibold">{task.nome}</h4>
            <p>{task.descricao}</p>
            <p className="text-sm text-gray-500">Prazo: {new Date(task.prazo).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
