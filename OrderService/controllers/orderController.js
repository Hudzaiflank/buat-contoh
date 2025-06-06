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
      res.status(201).json({
        message: "Order added successfully",
        orderId: results.insertId,
      });
    }
  );
};

// Fungsi untuk mendapatkan semua order
const getAllOrders = (req, res) => {
  orderModel.getAllOrders((err, orders) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving orders", error: err });
    }
    res.status(200).json(orders);
  });
};

// Fungsi untuk mendapatkan order berdasarkan user ID
const getOrdersByUserId = (req, res) => {
  const userId = req.params.userId;
  orderModel.getOrdersByUserId(userId, (err, orders) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving orders", error: err });
    }
    res.status(200).json(orders);
  });
};

// Fungsi untuk memperbarui order
const updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { userId, productId, requestType, status } = req.body;
  orderModel.updateOrder(
    orderId,
    userId,
    productId,
    requestType,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error updating order", error: err });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json({ message: "Order updated successfully" });
    }
  );
};

// Fungsi untuk menghapus order
const deleteOrder = (req, res) => {
  const orderId = req.params.id;
  orderModel.deleteOrder(orderId, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting order", error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  });
};

module.exports = {
  getOrderById,
  addOrder,
  getAllOrders,
  getOrdersByUserId,
  updateOrder,
  deleteOrder,
};
