import React from "react";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, Caption }, ref) => {
    const dialog = React.useRef();
  
    useImperativeHandle(ref, () => ({
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    }));

  
    return createPortal(
      <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md bg-stone-300 shadow-lg w-2/4 items-center text-center " >
        {children}
        <form action="dialog">
          <button className="btn-hover" >  {Caption}</button>
        </form>
      </dialog>,
      document.getElementById("modal-root")
    );
  });
  
  export default Modal;
  