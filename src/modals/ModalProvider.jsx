import React, { useState } from "react";
import {ModalContext} from "./ModalContext.jsx"

export const ModalProvider= ({children})=>{
    //const [modal, setModal]= useState({});

    const openModal= (modalId)=>{
        console.log("openmodal", modalId)
        //setModal((prevState)=>({...prevState,[modalId]:true}))
        document.getElementById(modalId).showModal()
    }
    const closeModal=(modalId)=>{
        //setModal((prevState)=>({...prevState, [modalId]:false}))
        document.getElementById(modalId).close()
    }
    return(
        <ModalContext.Provider value={{ openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}