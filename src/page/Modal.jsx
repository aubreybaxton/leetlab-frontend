// components/Modal.js
import React, { useContext } from 'react';

import { ModalContext } from '../modals/ModalContext';


const Modal = ({ id, title,buttonName, buttonIcon,buttonColor,modalContent }) => {
    const {openModal}= useContext(ModalContext)
  return (

    <>
      <button className={`btn ${buttonColor} mr-4 p-3 right-4 rounded-xl `} onClick={() => openModal(id)}>{buttonIcon}{buttonName}</button>
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
