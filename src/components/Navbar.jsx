import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore.js';
import ToggleTheme from '../page/ToggleTheme.jsx';


function Navbar() {
    const { authUser } = useAuthStore()

    return (
        <div className='w-full px-4 pt-2'>
            <div className="navbar  bg-primary text-primary-content shadow-lg rounded-2xl">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl"> CodeLab</Link>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end"><ToggleTheme /></div>
                    <div className="dropdown dropdown-end p-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={authUser?.image||"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" } />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link>
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar