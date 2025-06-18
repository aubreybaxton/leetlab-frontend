import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore.js';
//import ToggleTheme from '../page/ToggleTheme.jsx';
import LogoutButton from './LogoutButton.jsx';
import { FilePlus2, LogOut, Settings, User } from 'lucide-react';


function Navbar() {
    const { authUser } = useAuthStore()

    return (
        <div className='w-full px-4 pt-2 sticky top-0 z-10 '>
            <div className="navbar  bg-primary text-primary-content shadow-lg rounded-2xl">
                <div className="flex-1">
                    <Link className="mx-2 text-xl"> CodeLab </Link>
                </div>
                <div className="flex-none">
                    {/* <div className="dropdown dropdown-end"><ToggleTheme /></div> */}
                    <div className="dropdown dropdown-end p-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="user image"
                                    src={authUser?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-slate-500 text-slate-content rounded-box z-1 mt-3 w-44 p-2 shadow">
                            <p className='text-accent text-center'>{authUser?.name}</p>
                            <div className='divider'></div>
                            {authUser?.role === "ADMIN" ? 
                            <li><Link to={"/profileadmin"}> <User /> Admin Profile</Link></li> 
                            : <li><Link to={"/profile"}> <User /> Profile</Link></li>
                            }
                            {authUser?.role === "ADMIN" && (
                                <>
                                    <li><Link to={"/addproblem"}><FilePlus2 /> Add Problem</Link> </li>
                                </>
                            )}
                            <li><Link to={"/setting"}> <Settings /> Settings</Link></li>
                            <div className='divider'></div>
                            <li><LogoutButton><LogOut /> Logout </LogoutButton></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar