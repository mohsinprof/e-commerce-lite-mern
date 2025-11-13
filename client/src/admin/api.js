import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// Get token from localStorage
const getToken = () => localStorage.getItem("adminToken");

// Axios instance with token
const axiosAdmin = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getProducts = () => axios.get(API_URL);
export const createProduct = (product) => axiosAdmin.post("/", product);
export const updateProduct = (id, product) => axiosAdmin.put(`/${id}`, product);
export const deleteProduct = (id) => axiosAdmin.delete(`/${id}`);
