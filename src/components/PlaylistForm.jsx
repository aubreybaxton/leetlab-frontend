import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState , useContext} from 'react';
import { useForm } from 'react-hook-form';
import { playlistFormSchema } from '../page/schema/Schema.jsx';
import { usePlaylistStore } from '../store/usePlaylistStore.js';
import { ModalContext } from "../modals/ModalContext.jsx";


function PlaylistForm({id}) {
    const { closeModal } = useContext(ModalContext)
    const{createPlaylist}=usePlaylistStore();
    const { 
        register,
        reset,
        handleSubmit
        , formState: {errors},
    } = useForm({ resolver: zodResolver(playlistFormSchema) })

    const onSubmit= async (value) => {
        console.log(value)
        createPlaylist(value);
        reset();
        closeModal(id)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>Create Playlist</div>

                <fieldset className="fieldset">
                    {/* <p className="label">Name </p> */}
                    <legend className="fieldset-legend"> Name</legend>
                    {/* <p className="label">Name </p> */}
                    <input type="text" {...register("name")} className="input w-full" placeholder="Type here" />
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className="fieldset-legend">Description</legend>
                    <textarea  {...register("description")} className="textarea h-24 w-full" placeholder="Bio"></textarea>
                </fieldset>

                <div className="flex justify-end mt-4">
                    <button type='submit' className="btn btn-accent">Create</button>
                </div>
            </form>
        </>
    )
}

export default PlaylistForm