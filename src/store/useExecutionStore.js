import React from 'react'
import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { axiosInstance } from '../libs/axios';

export const useExecutionStore = create((set) => ({
    isExecuting: false,
    submission: null,

    executeCode: async (source_code, language_id, stdin, expected_output, problemId) => {
        try {
            set({isExecuting:true})
            const res = await axiosInstance.post("/execute-code", { source_code, language_id, stdin, expected_output, problemId })
            set({ submission: res.data.submission })
            toast.success("Code Executed Successfully");
        } catch (error) {
            console.log("error while", error)
        }
    }
}))