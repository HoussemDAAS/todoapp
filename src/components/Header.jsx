import React from "react";

const Header = ({
  handleshow,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="rounded-r-xl w-1/3 bg-[#1A120B] mt-20 px-8  py-16 text-stone-50 md:w-72">
      <div className="">
        <h2 className="mb-8 h2-bold uppercase md:text-xl text-stone-200">
          YOUR PROJECTS
        </h2>
        <button className="btn-hover" onClick={handleshow}>
          + Add Project
        </button>
      </div>
      <ul className="gap-4 mt-4 text-start ">
        {projects.map((project) => {
           
          return (
            <li
              key={project.title}
              className={`my-2 rounded text-stone-300 text-md font-semibold tracking-widest active ${ selectedProjectId === project.id ? "bg-stone-500" : ""}`}
            >
              <button
                className="hover:text-stone-50 hover:bg-stone-500 py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Header;
