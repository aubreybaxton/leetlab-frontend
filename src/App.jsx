import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import SignupPage from "./page/SignupPage.jsx";


function App() {
  const authUser = null;
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 
        authUser?<HomePage/>:<Navigate to={<LoginPage/>}/>
        {{!authUser?<LoginPage/> :<Navigate to={<HomePage/>} } */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>

    </>
  )
}

export default App
