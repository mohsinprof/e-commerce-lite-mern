// AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Dashboard";
import AdminLogin from "./AdminLogin";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      {/* Add more admin routes here */}
    </Routes>
  );
};

export default AdminRoutes;
