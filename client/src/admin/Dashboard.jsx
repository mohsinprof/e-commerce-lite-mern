import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products Management Card */}
        <div
          onClick={() => navigate("/admin/products")}
          className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Add, edit, or delete products from your store.
          </p>
        </div>

        {/* Orders Card (Optional future feature) */}
        <div className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-gray-600 dark:text-gray-300">
            View and manage customer orders.
          </p>
        </div>

        {/* Users Card (Optional future feature) */}
        <div className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Manage admin and customer accounts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
