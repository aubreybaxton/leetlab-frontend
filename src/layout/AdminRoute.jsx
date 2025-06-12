import React from 'react';
import { useAuthStore } from '../store/useAuthStore'
import { Navigate, Outlet } from 'react-router-dom';

function AdminRoute() {

  const { authUser, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return (<div className="flex flex-col items-center justify-start pt-8">
      <Loader color="#460082" className="size-10 animate-spin" />
    </div>)
  }
  if (!authUser || authUser.role !== "ADMIN") {
    return <Navigate to={'/'} />
  }
  return <Outlet />
}

export default AdminRoute;