import React from "react";
import NewProject from "./NewProject";

const Header = ({handleshow}) => {
  return (
    <aside className="rounded-r-xl w-1/3 bg-[#1A120B] mt-20 px-8  py-16 text-stone-50 md:w-72">
      <div className="">
      <h2 className="mb-8 h2-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
      <button className="btn-hover" onClick={handleshow}>
        + Add Project
      </button>
      </div>

    </aside>
  );
};

export default Header;
