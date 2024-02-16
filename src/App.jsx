import Header from "./components/Header";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProject from "./components/NoProject";
function App() {
  const [showModal, setShowModal] = useState({
    selecetdProjectId: undefined,
    projects: [],
  });

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
      };
    });
  }
  let content;
  if (showModal.selecetdProjectId === null) {
    content = <NewProject onAdd={handleAddProject} handleClose={handleCancel} />;
  } else if (showModal.selecetdProjectId === undefined) {
    content = <NoProject start={handleshow} />;
  }
  



  return (
    <main className="h-screen gap-8 flex">
      <Header handleshow={handleshow} projects={showModal.projects} />
      {content}
    </main>
  );
}

export default App;
