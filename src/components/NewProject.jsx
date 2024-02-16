import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
const NewProject = ({onAdd,handleClose}) => {
  const model=useRef();

  const Title=useRef();
   const description=useRef();
  const date=useRef();

  function handlesave() {
  const NewTitle=Title.current.value;
  const NewDescription=description.current.value;
  const NewDate=date.current.value;

  if (NewTitle.trim().length === 0 || NewDescription.trim().length === 0) {
    model.current.open();
    return;
  }
  onAdd({
    title:NewTitle,
    description:NewDescription,
    date:NewDate
  });
  }

  return (
    <>
    <Modal ref={model} Caption={"Close"} classNameclassName="p-4 rounded-md bg-stone-300 shadow-lg w-2/4 items-center justify-center flex flex-col gap-2">
      <h2 className="h2-bold my-3 text-stone-700 uppercase">Invalide input</h2>
      <p className="text-red-400 my-3">Please check your input values</p>
    </Modal>
    <div className="w-[35rem] mt-20">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="btn-hover " onClick={handleClose}>Cancel</button>
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
      
    </div></>
  );
};

export default NewProject;
