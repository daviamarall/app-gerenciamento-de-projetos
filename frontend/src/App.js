import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [projects, setProjects] = useState([]);  // Mantém a lista de projetos
  const [selectedProject, setSelectedProject] = useState(null);

  // Função chamada ao selecionar um projeto
  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
  };

  // Função chamada quando um projeto é adicionado
  const handleProjectAdded = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);  // Adiciona o novo projeto à lista
    setSelectedProject(newProject._id);  // Seleciona o projeto recém-criado
  };

  return (
    <div className="p-6">
      <ProjectForm onProjectAdded={handleProjectAdded} />
      <ProjectList projects={projects} onSelectProject={handleProjectSelect} />
      {selectedProject && (
        <>
          <TaskForm projectId={selectedProject} />
          <TaskList projectId={selectedProject} />
        </>
      )}
    </div>
  );
};

export default App;
