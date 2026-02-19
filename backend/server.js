require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String
});

const Product = mongoose.model("Product", productSchema);

// Get Products API
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add Product API
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({ message: "Product added successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});