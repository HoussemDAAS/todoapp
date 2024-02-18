import React from "react";
import Tasks from "./Tasks";
const SelectedProject = ({ project,DeleteProject,onAddTask,onDeleteTask,tasks }) => {
    const formatedDate =new Date(project.date).toLocaleDateString("en-US",{
        day:"numeric",
        month:"long",
        year:"numeric"
    });
  return (
    <div className="w-[35rem] mt-[5rem] ml-5 ">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <button className="btn-hover" onClick={() => DeleteProject(project.id)}>Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
};

export default SelectedProject;
