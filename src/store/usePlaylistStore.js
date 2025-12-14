import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import { toast } from "react-hot-toast";

export const usePlaylistStore = create((set) => ({
    playlist: [],
    isPlaylistLoading: null,

    createPlaylist: async (data) => {

        try {
            set({ isPlaylistLoading: true })
            const res = await axiosInstance.post("/playlist/createplaylist", data);
            console.log("create playlist", res.data)
            toast.success(res.data.message)
        } catch (error) {
            console.log("error while CreatePlaylist", error)
        }
    },
    fetchPlaylist: async () => {
        try {
            set({ isPlaylistLoading: true });
            const res = await axiosInstance.get("/playlist/getplaylist");
            set({ playlist: res.data.playlists })
            console.log("fetch playlist", res.data.playlists)
        } catch (error) {
            console.log("error while fetchPlaylist", error)
        } finally {
            set({ isPlaylistLoading: false })
        }
    },
    // updatePlaylist: async (data) => {
    //     try {
    //         set({ isPlaylistLoading: true });
    //         const res = await axiosInstance.post("/playlist/");
    //     } catch (error) {
    //    console.log("error while fetchPlaylist", error)
    //     }
    // },
    addToPlaylist: async (id, data) => {
        try {
            set({ isPlaylistLoading: true });
            const res = await axiosInstance.post(`/playlist/${id}/addtoplaylist`, data);
            
            toast.success(res.data.message)
            console.log("fetch playlist", res.data.playlists)
        } catch (error) {
            console.log("error while fetchPlaylist", error)
            toast.error("Error while adding to playlist")
        } finally {
            set({ isPlaylistLoading: false })
        }
    },

}))