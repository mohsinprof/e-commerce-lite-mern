// AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your admin pages/components
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AdminSettings from "./AdminSettings"; // example

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin login page */}
      <Route path="login" element={<AdminLogin />} />

      {/* Admin dashboard page */}
      <Route path="dashboard" element={<AdminDashboard />} />

      {/* Example additional admin route */}
      <Route path="settings" element={<AdminSettings />} />

      {/* Catch-all for unknown admin routes */}
      <Route path="*" element={<h1>Admin Page Not Found</h1>} />
    </Routes>
  );
};

export default AdminRoutes;
