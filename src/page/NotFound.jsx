import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200" data-aos="zoom-in-down">
            <div className='text-center'>
            <h1 className='text-4xl text-red-500'>404 - Page Not Found</h1>
            <p className='text-2xl text-red-500'>Oops! The page you're looking for doesn't exist.</p>
            <button className='btn btn-accent m-4'><Link to="/">Go back home</Link></button>
            </div>
        </div> 
    )
}

export default NotFound