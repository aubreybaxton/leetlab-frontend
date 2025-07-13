import React from 'react';

function PlaylistForm() {
    return (
        <>
            <form>
                <div>Create Playlist</div>

                <fieldset className="fieldset">
                    {/* <p className="label">Name </p> */}
                    <legend className="fieldset-legend"> Name</legend>
                    {/* <p className="label">Name </p> */}
                    <input type="text" className="input w-full" placeholder="Type here" />
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className="fieldset-legend">Description</legend>
                    <textarea className="textarea h-24 w-full" placeholder="Bio"></textarea>
                </fieldset>

                <div className="flex justify-end mt-4">
                    <button className="btn btn-accent">Create</button>
                </div>
            </form>
        </>
    )
}

export default PlaylistForm