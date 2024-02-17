import Header from "./components/Header";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [showModal, setShowModal] = useState({
    selecetdProjectId: undefined,
    projects: [],
  });


  const handleSelectdProject = (id) => {
    setShowModal((prevState) => {
      return {
        ...prevState,
        selecetdProjectId: id,
      };
    });
  }
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
        projects: [...prevState.projects,newProject],
      };
    });
  }
  const selectedProject = showModal.projects.find(project => project.id === showModal.selecetdProjectId);
  let content=<SelectedProject project={selectedProject} />;
  if (showModal.selecetdProjectId === null) {
    content = <NewProject onAdd={handleAddProject} handleClose={handleCancel} />;
  } else if (showModal.selecetdProjectId === undefined) {
    content = <NoProject start={handleshow} />;
  }
  



  return (
    <main className="h-screen gap-8 flex">
      <Header handleshow={handleshow} projects={showModal.projects} onSelectProject={handleSelectdProject} />
      {content}
    </main>
  );
}

export default App;
