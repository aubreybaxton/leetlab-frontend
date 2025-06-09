import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSignUp: false,
    isLoggingIn: false,
    isCheckingAuth: false,

    checkAuth: async () => {
        set({ isCheckingAuth: true })
        try {
            const authCheck = await axiosInstance.get("/auth/check")
            set({ authUser: authCheck.data.user });
            console.log("auth Check response", authCheck.data)
            toast.success(authCheck.data.message)
        } catch (error) {
            console.log("Error while Logging In",error)
            set({ authUser: null })
            toast.error("Error while Logging In")
        } finally {
            set({ isCheckingAuth: false })
        }
    },
    signup:async (data) => {
        set({isSignUp:true})
        try {
            const signupResposne= await axiosInstance.post("/auth/register",data)
            set({ authUser: signupResposne.data.user });
            console.log("signup response",signupResposne.data)
            toast.success("SignUp Successfully")
            
        } catch (error) {
            console.log("Error while Logging In",error)
            set({ authUser: null })
            toast.error("Error while Logging In")
        }finally {
            set({ isSignUp: false });
          }
    },
    login:async (data) => {
        set({isLoggingIn:true})
        try {
            const loginRes= await axiosInstance.post("/auth/login", data)
            set({ authUser: loginRes.data.user });
            console.log("Login response", loginRes.data)
            toast.success("Login Succesfully")
        
        } catch (error) {
            console.log("Error while Logging In",error)
            set({ authUser: null })
            toast.error("Error while Logging In")
        } finally{
            set({ isLoggingIn: false })
        }
    },
    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
      
            toast.success("Logout successful");
          } catch (error) {
            console.log("Error logging out", error);
            toast.error("Error logging out");
          }
    }
})
)