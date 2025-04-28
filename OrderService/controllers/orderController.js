const orderModel = require("../models/orderModel");

// Fungsi untuk mendapatkan order berdasarkan ID
const getOrderById = (req, res) => {
  const orderId = req.params.id;
  orderModel.getOrderById(orderId, (err, order) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving order", error: err });
    }
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  });
};

// Fungsi untuk menambahkan order baru
const addOrder = (req, res) => {
  const { userId, productId, requestType, status } = req.body;
  orderModel.addOrder(
    userId,
    productId,
    requestType,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding order", error: err });
      }
      res
        .status(201)
        .json({
          message: "Order added successfully",
          orderId: results.insertId,
        });
    }
  );
};

module.exports = { getOrderById, addOrder };
