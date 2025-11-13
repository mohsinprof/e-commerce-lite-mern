import React from "react";
// Import Routes and Route from React Router
import { Routes, Route } from "react-router-dom"; 

// Import all components used in the app
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList"; 
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AdminRoutes from "./admin/AdminRoutes";

const App = () => {
  return (
    <>
      {/* Header appears on every page */}
      <Header />

      {/* Routes handle conditional rendering based on URL */}
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<Login />} />
  <Route path="/admin/*" element={<AdminRoutes />} /> {/* Only this line handles all admin routes */}
  <Route path="*" element={<h1>404: Page Not Found</h1>} />
</Routes>


      {/* Footer appears on every page */}
      <Footer />
    </>
  );
};

export default App;
