import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import Product from "../models/Product.js";

const router = express.Router();

router.post("/add-product", authMiddleware, adminMiddleware, async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

router.delete(
  "/delete-product/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  }
);

export default router;
