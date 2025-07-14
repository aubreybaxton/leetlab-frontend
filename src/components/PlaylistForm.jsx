import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { playlistFormSchema } from '../page/schema/Schema.jsx';

function PlaylistForm() {
    const { 
        register,
        reset,
        handleSubmit
        , formState: errors
    } = useForm({ resolver: zodResolver(playlistFormSchema) })
    return (
        <>
            <form onSubmit={handleSubmit(onPlaylistSubmit)}>
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