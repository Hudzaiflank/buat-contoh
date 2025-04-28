const productModel = require("../models/productModel");

// Fungsi untuk mendapatkan produk berdasarkan ID
const getProductById = (req, res) => {
  const productId = req.params.id;
  productModel.getProductById(productId, (err, product) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving product", error: err });
    }
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  });
};

// Fungsi untuk menambahkan produk baru
const addProduct = (req, res) => {
  const { name, type, location, status, description } = req.body;
  productModel.addProduct(
    name,
    type,
    location,
    status,
    description,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding product", error: err });
      }
      res
        .status(201)
        .json({
          message: "Product added successfully",
          productId: results.insertId,
        });
    }
  );
};

// Fungsi untuk memperbarui produk
const updateProduct = (req, res) => {
  const { name, type, location, status, description } = req.body;
  const productId = req.params.id;
  productModel.updateProduct(
    productId,
    name,
    type,
    location,
    status,
    description,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error updating product", error: err });
      }
      res.status(200).json({ message: "Product updated successfully" });
    }
  );
};

// Fungsi untuk menghapus produk
const deleteProduct = (req, res) => {
  const productId = req.params.id;
  productModel.deleteProduct(productId, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting product", error: err });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  });
};

module.exports = { getProductById, addProduct, updateProduct, deleteProduct };
