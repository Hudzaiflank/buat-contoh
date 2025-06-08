const db = require("../config/db");

const getOrderById = async (orderId) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE order_id = ?", [
    orderId,
  ]);
  return rows[0];
};

const addOrder = async (userId, productId, requestType, status) => {
  const [result] = await db.query(
    "INSERT INTO orders (user_id, product_id, request_type, status) VALUES (?, ?, ?, ?)",
    [userId, productId, requestType, status]
  );
  return { order_id: result.insertId, userId, productId, requestType, status };
};

const getAllOrders = async () => {
  const [rows] = await db.query("SELECT * FROM orders");
  return rows;
};

const getOrdersByUserId = async (userId) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE user_id = ?", [
    userId,
  ]);
  return rows;
};

const updateOrder = async (orderId, userId, productId, requestType, status) => {
  await db.query(
    "UPDATE orders SET user_id = ?, product_id = ?, request_type = ?, status = ? WHERE order_id = ?",
    [userId, productId, requestType, status, orderId]
  );
  return { order_id: orderId, userId, productId, requestType, status };
};

const deleteOrder = async (orderId) => {
  await db.query("DELETE FROM orders WHERE order_id = ?", [orderId]);
  return { success: true };
};

module.exports = {
  getOrderById,
  addOrder,
  getAllOrders,
  getOrdersByUserId,
  updateOrder,
  deleteOrder,
};
