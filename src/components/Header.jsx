import React from "react";

const Header = () => {
  return (
    <aside className="rounded-r-xl w-1/3 bg-[#1A120B] mt-20 px-8  py16 text-stone-50 md:w-72">
      <h2 className="mb-8 h2-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
      <button className="bg-[#C7C8CC] text-white px-4 py-2 rounded-md text-xs md:text-base hover:bg-stone-600 hover:text-stone-300">
        + Add Project
      </button>
      <div className="flex-start text-left">
        <p>ahla</p>
      </div>
    </aside>
  );
};

export default Header;
