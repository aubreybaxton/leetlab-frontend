import { create } from "zustand";

export const useModalStore=create((set)=>({
    activeModal: null,
    openModal: (id) => set({ activeModal: id }),
    closeModal: () => set({ activeModal: null }),

}))

//// not is use
//2
// use this whereyou want to open the modal
// const openModal = useModalStore((state) => state.openModal);

//3
// create a modal component