import React, { useContext} from 'react'
import { Contact } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { usePlaylistStore } from '../store/usePlaylistStore.js';
import { ModalContext } from '../modals/ModalContext.jsx';


function AddToPlaylist({playlist, isPlaylistLoading,problemId}) {
    const{ addToPlaylist } = usePlaylistStore();
    const{ register,reset,handleSubmit}=useForm();
    const {closeModal}=useContext(ModalContext);
    
    
    const addPlaylistSubmit= async (data) => {
        console.log("Add to Playlist data",data);
        try {
            await addToPlaylist(problemId, data);
            reset();
            closeModal(problemId);
        } catch (error) {
            console.log("Error while adding to playlist",error);
        }

    }

    if(isPlaylistLoading){
        return <div>Loading...</div>
    }
    return (
        <form className='w-full' onSubmit={handleSubmit(addPlaylistSubmit)}>
            <select {...register('playlistId')}  className="select w-full">
                <option disabled={true} key={"placeholder"}>Select Playlist</option>
                {playlist?.map((pl)=>(
                    <option key={pl.id} value={pl.id}>{pl.name}</option>
                ))}
               
            </select>
            <button type='submit' className="btn btn-accent mt-4 w-full">Add to Playlist</button>
        </form>
    )
}

export default AddToPlaylist