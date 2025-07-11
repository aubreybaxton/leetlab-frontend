import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../libs/axios";

export const useSubmissionStore= create((set)=>({
    isLoading: null,
    allSubmissions:[],
    submissionByProblem:null,
    submissionCount:null,

    getAllSubmissionsByUser:async () => {
        try {
            set({isLoading:true})
            const res= await axiosInstance.get("/submission/get-all-submission")
            set({allSubmissions:res.data.userSubmission})
            toast.success(res.data.message)
        } catch (error) {
            console.error("Error while getting submissions", error)
            toast.error("Error while fetching")
            set({isLoading:null})
        } finally{
            set({isLoading:false})
        }
    },
    getSubmissionByUserAndProblem:async (id) => {
        try {
            set({isLoading:true})
            const res= await axiosInstance.get(`/submission/get-submission/${id}`)
            set({submissionByProblem:res.data.submissionbyProblem})
            toast.success(res.data.message)
        } catch (error) {
            console.error("Error while getting submissions", error)
            toast.error("Error while fetching By Problem")
            set({isLoading:null})
            
        } finally{
            set({isLoading:false})
        }
    },
    getSubmissionCount: async (id) => {
        try {
            set({isLoading:true})
            const res= await axiosInstance.get(`/submission/get-submission-count/${id}`)
            set({submissionCount:res.data.submissionCount})
            toast.success(res.data.message)
        } catch (error) {
            console.error("Error while getting submissions", error)
            toast.error("Error while fetching Count")
            set({isLoading:null})
        }

    }
}))