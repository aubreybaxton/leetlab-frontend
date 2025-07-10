import React from 'react'
import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { axiosInstance } from '../libs/axios';

export const useExecutionStore = create((set) => ({
    isExecuting: false,
    submission: null,

    executeCode: async (source_code, language_id, stdin, expected_outputs, problemId) => {
        try {
            set({isExecuting:true})
            const res = await axiosInstance.post("/execute-code", { source_code, language_id, stdin, expected_outputs, problemId })
            console.log("res.data", res.data)
            set({ submission: res.data.submission })
            toast.success(res.data.message);
        } catch (error) {
            console.log("error while", error)
            toast.error("Error While Executing");
        } finally{
            set({isExecuting:false})
        }
    }
}))