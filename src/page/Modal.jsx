// components/Modal.js
import React from 'react';


const Modal = ({ id, title, buttonIcon,buttonColor,modalContent,onCloseModal }) => {
    
  return (

    <>
      <button className={`btn ${buttonColor} mr-4 p-3 rounded-lg`} onClick={() => document.getElementById(`${id}`).showModal()}>{buttonIcon}</button>
      <dialog id={id} className="modal">
        <div className="modal-box m-4">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="py-4">{id&& modalContent}</div>
        </div>
      </dialog>
    </>
   
  );
};

export default Modal;
