import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";


import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import SignupPage from "./page/SignupPage.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import Layout from "./layout/layout.jsx";



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
      <div className="flex flex-col items-center justify-start">
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
          </Route>
          
          {/* 
        authUser?<HomePage/>:<Navigate to={<LoginPage/>}/>
        { } */}
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to={"/"} />} />
        </Routes>
      </div>

    </>
  )
}

export default App
