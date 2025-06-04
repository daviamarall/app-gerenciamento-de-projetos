import React from 'react';

const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Projetos</h2>
      <ul className="space-y-2">
        {projects.length === 0 ? (
          <p>Nenhum projeto cadastrado.</p>
        ) : (
          projects.map((project) => (
            <li key={project._id} className="bg-gray-100 p-4 rounded-md">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{project.nome}</h3>
                <button
                  onClick={() => onSelectProject(project._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Ver Tarefas
                </button>
              </div>
              <p>{project.descricao}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProjectList;
