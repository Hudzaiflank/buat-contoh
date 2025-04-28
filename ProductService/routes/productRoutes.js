const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Endpoint untuk mendapatkan produk berdasarkan ID
router.get("/:id", productController.getProductById);

// Endpoint untuk menambahkan produk baru
router.post("/", productController.addProduct);

// Endpoint untuk memperbarui produk berdasarkan ID
router.put("/:id", productController.updateProduct);

// Endpoint untuk menghapus produk berdasarkan ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;
