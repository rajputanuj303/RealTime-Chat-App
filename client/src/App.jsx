import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import AuthContext from "../context/AuthContext";
import assets from "./assets/assets";

const App = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <div
      className="bg-cover bg-center h-screen bg-no-repeat w-full relative"
      style={{ backgroundImage: "url('/bgImage.svg')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 h-full">
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
