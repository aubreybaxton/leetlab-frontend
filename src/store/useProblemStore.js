import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const useProblemStore= create((set)=>({
    problems:[],
    problem:null,
    solvedProblems:[],
    isProblemsLoading:false,
    isProblemLoading:false,

    getAllProblems: async () => {
        
    }
}))