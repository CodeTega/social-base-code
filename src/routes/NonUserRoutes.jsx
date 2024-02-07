import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import CreateUser from "../components/CreateUser";
import ForgotPassword from "../components/ForgotPassword";
import NavBar from "../components/NavBar";

export default function NonUserRoutes() {
  return (
    <div>
      <Home>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-account" element={<CreateUser />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </Home>
    </div>
  );
}
