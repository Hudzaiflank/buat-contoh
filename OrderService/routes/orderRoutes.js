const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Endpoint untuk mendapatkan order berdasarkan ID
router.get("/:id", orderController.getOrderById);

// Endpoint untuk menambahkan order baru
router.post("/", orderController.addOrder);

module.exports = router;
