import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";


import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import SignupPage from "./page/SignupPage.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import Layout from "./layout/layout.jsx";
import AdminRoute from "./layout/AdminRoute.jsx";
import AddProblem from "./page/AddProblem.jsx";
import Profile from "./components/profile.jsx";
import Setting from "./components/Setting.jsx";



function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex flex-col items-center justify-start pt-8">
        <Loader color="#460082" className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen w-full " >
        <Toaster
          position="top-right"
          duration="3000"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                borderRadius: '12px',
                border: '2px solid #059212',
                padding: '16px',
                color: 'black',
              },
            },
            error: {
              style: {
                border: '2px solid #FF204E',
                borderRadius: '12px',
                padding: '16px',
                color: 'red'
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
            <Route path="profile" element={authUser ? <Profile /> : <Navigate to={"/login"} />} />
            <Route path="setting" element={authUser ? <Setting /> : <Navigate to={"/login"} />} />
          </Route>

          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to={"/"} />} />
          <Route element={<AdminRoute />}>
            <Route path="/addproblem" element={authUser ? <AddProblem /> : <Navigate to={"/"} />} />
            <Route path="/profileadmin" element={authUser ? <AddProblem /> : <Navigate to={"/"} />} />
          </Route>
        </Routes>
      </div>

    </>
  )
}

export default App
