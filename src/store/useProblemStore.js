import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";

export const useProblemStore = create((set) => ({
    problems: [],
    problem: null,
    solvedProblems: [],
    isProblemsLoading: false,
    isProblemLoading: false,

    getAllProblems: async () => {
        try {
            set({ isProblemsLoading: true })
            const res = await axiosInstance.get("/problems/get-all-problems");
            //console.log("get all p", res.data.getProblems)
            set({ problems: res.data.getProblems })
        } catch (error) {
            console.log("Error getting All Problems", error);
            toast.error("Error getting All Problems")

        }
        finally {
            set({ isProblemsLoading: false })
        }
    },
    getProblemById: async (id) => {
        try {
            set({ isProblemLoading: true })
            const res = await axiosInstance.get(`/problems/get-problem/${id}`);
            set({ problem: res.data.findById })
            console.log("get problem log",res.data.findById)
            toast.success(res.data.message)
        } catch (error) {
            console.log("Error getting Problem", error);
            toast.error("Error getting Problem")
        } finally {
            set({ isProblemLoading: false })
        }
    },
    getSolvedProblemByUser: async () => {
        try {
            const res = await axiosInstance.get("/problems/get-solved-problem")
            set({ solvedProblems: res.data.getProblems })
        } catch (error) {
            console.log("Error getting Problem", error);
            toast.error("Error getting Problem")
        }
    }
}))