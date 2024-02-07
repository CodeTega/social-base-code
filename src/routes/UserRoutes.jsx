import React from "react";
import Dashboard from "../pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Profile from "../pages/Profile";

export default function UserRoutes() {
  return (
    <div>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </Dashboard>
    </div>
  );
}
