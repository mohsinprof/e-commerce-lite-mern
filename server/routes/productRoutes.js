import express from "express";
import Product from "../models/Product.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create product (Admin only)
router.post("/", protectAdmin, async (req, res) => {
  const product = new Product(req.body);
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Get all products (public)
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get single product (public)
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});

// Update product (Admin only)
router.put("/:id", protectAdmin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    Object.assign(product, req.body);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else res.status(404).json({ message: "Product not found" });
});

// Delete product (Admin only)
router.delete("/:id", protectAdmin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else res.status(404).json({ message: "Product not found" });
});

export default router;
