import React, { useState, useEffect } from "react";
import { createProduct, updateProduct, getProducts } from "./api";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function AddEditProductForm({ onSave }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (productId) fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (id) => {
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
    setName(data.name);
    setPrice(data.price);
    setQuantity(data.quantity);
    setDescription(data.description);
    setFeatured(data.featured);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, quantity, description, featured };

    if (productId) {
      await updateProduct(productId, product);
    } else {
      await createProduct(product);
    }

    onSave();
    navigate("/admin/products");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{productId ? "Edit Product" : "Add Product"}</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <span>Featured Product</span>
        </label>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded w-full"
        >
          {productId ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default AddEditProductForm;
