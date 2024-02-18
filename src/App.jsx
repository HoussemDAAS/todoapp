import Header from "./components/Header";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [showModal, setShowModal] = useState({
    selecetdProjectId: undefined,
    projects: [],
    tasks: [],
  });
function handleTasks(text){

  setShowModal((prevState) => {
    const newTask = {
      projectId: prevState.selecetdProjectId,
      text: text,
       id: Math.random(),
     };
    return {
      ...prevState,
      tasks: [newTask,...prevState.tasks],
    };
  });
  
}
function handleDeleteTask(id){
  setShowModal((prevState) => {
    return {
      ...prevState,

      tasks: prevState.tasks.filter((task) => task.id !== id),
    };
  });
  
}
  const handleSelectdProject = (id) => {
    setShowModal((prevState) => {
      return {
        ...prevState,
        selecetdProjectId: id,
      };
    });
  };
  const handleshow = () => {
    setShowModal((prevState) => {
      return {
        ...prevState,
        selecetdProjectId: null,
      };
    });
  };
  const handleAddProject = (projectData) => {
    const project = {
      ...projectData,
      id: Math.random(),
    };
    setShowModal((prevState) => {
      return {
        ...prevState,
        selecetdProjectId: undefined,
        projects: [...prevState.projects, project],
      };
    });
  };
  const handleCancel = () => {
    setShowModal((prevState) => {
      return {
        ...prevState,
        selecetdProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };
  const handleDeleteProject = (id) => {
    setShowModal((prevState) => {
      return {
        ...prevState,
        selecetdProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  };
  const selectedProject = showModal.projects.find(
    (project) => project.id === showModal.selecetdProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      DeleteProject={handleDeleteProject}
      onAddTask={handleTasks}
      onDeleteTask={handleDeleteTask}
      tasks={showModal.tasks}
    />
  );
  if (showModal.selecetdProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} handleClose={handleCancel} />
    );
  } else if (showModal.selecetdProjectId === undefined) {
    content = <NoProject start={handleshow} />;
  }

  return (
    <main className="h-screen gap-8 flex">
      <Header
        handleshow={handleshow}
        projects={showModal.projects}
        onSelectProject={handleSelectdProject}
        selectedProjectId={showModal.selecetdProjectId}
      />
      {content}
    </main>
  );
}

export default App;
