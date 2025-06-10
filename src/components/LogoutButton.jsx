import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

function LogoutButton({children}) {
    const {logout}= useAuthStore();
    const onLogout=()=>{
        logout();
    }
  return (
   <button onClick={onLogout}>{children}</button>
  )
}

export default LogoutButton