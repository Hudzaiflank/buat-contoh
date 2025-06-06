// filepath: e:\kuliah\Semester 8\EAI\UTS-EAI\OrderService\routes\orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Endpoint untuk mendapatkan semua order
router.get("/", orderController.getAllOrders);

// Endpoint untuk mendapatkan order berdasarkan user ID
router.get("/user/:userId", orderController.getOrdersByUserId);

// Endpoint untuk mendapatkan order berdasarkan ID
router.get("/:id", orderController.getOrderById);

// Endpoint untuk menambahkan order baru
router.post("/", orderController.addOrder);

// Endpoint untuk memperbarui order
router.put("/:id", orderController.updateOrder);

// Endpoint untuk menghapus order
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
