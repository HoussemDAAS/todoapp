import React, { useRef } from "react";
import Input from "./Input";
const NewProject = ({onAdd}) => {
  const Title=useRef();
   const description=useRef();
  const date=useRef();

  function handlesave() {
  const NewTitle=Title.current.value;
  const NewDescription=description.current.value;
  const NewDate=date.current.value;

  if (NewTitle.trim().length === 0 || NewDescription.trim().length === 0) {
    
  }

  onAdd({
    title:NewTitle,
    description:NewDescription,
    date:NewDate
  });
  }

  return (
    
    <div className="w-[35rem] mt-20">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="btn-hover">Cancel</button>
        </li>
        <li>
          <button className="btn-hover hover:-translate-y-1 hover:scale-110" onClick={handlesave}>Save</button>
        </li>
      </menu>
      <div>
        <Input Label={"title"}    textarea={false}  placeholder="enter your task" ref={Title}/>
        <Input Label={"description"}  textarea={true} placeholder="enter your description" ref={description}/>
        <Input Label={"date"}  type="date" ref={date} />
      </div>
      
    </div>
  );
};

export default NewProject;
