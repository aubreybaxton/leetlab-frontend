import {create} from "zustand";
import { axiosInstance } from "../libs/axios.js";

export const usePlaylistStore= ((set)=>({
    playlist:[],
    isPlaylistLoading:null,

    createPlaylist: async (data) => {

        try {
            set({isPlaylistLoading:true}) 
            const res=  await axiosInstance.post("/playlist/createplaylist", data);
            
        } catch (error) {
            console.log("error while CreatePlaylist", error)
        }
    },
    fetchPlaylist:async () => {
        try {
            set({isPlaylistLoading:true});
            const res= await axiosInstance.get("/playlist/");
            set({playlist:res.data})
        } catch (error) {
            console.log("error while fetchPlaylist", error) 
        }
    },
    updatePlaylist:async (data) => {
        try {
            
        } catch (error) {
            
        }
    }
}))