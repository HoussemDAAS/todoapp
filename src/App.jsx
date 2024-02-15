import Header from "./components/Header";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProject from "./components/NoProject";
function App() {
  const [showModal, setShowModal] =useState(false);

  const handleshow = () => {
    setShowModal(!showModal);
  }

  return (
    <main className="h-screen gap-8 flex">
    <Header handleshow={handleshow} />
    {showModal ? <NewProject /> : <NoProject start={handleshow} />}
    </main>
  );
}

export default App;
