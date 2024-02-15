
import React from "react";
import Input from "./Input";
const NewProject = () => {
  return (
    <div className="w-[35rem] mt-20">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="btn-hover">Cancel</button>
        </li>
        <li>
          <button className="btn-hover hover:-translate-y-1 hover:scale-110">Save</button>
        </li>
      </menu>
      <div>
        <Input Label={"title"}    textarea={false}  placeholder="enter your task"/>
        <Input Label={"description"}  textarea={true} placeholder="enter your description"/>
        <Input Label={"date"}  type="date" />
      </div>
    </div>
  );
};

export default NewProject;
