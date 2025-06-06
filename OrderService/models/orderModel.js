const db = require("../config/db");

// Fungsi untuk mendapatkan data order berdasarkan ID
const getOrderById = (orderId, callback) => {
  const query = `SELECT * FROM orders WHERE order_id = ?`;
  db.query(query, [orderId], (err, results) => {
    if (err) {
      console.error("Error retrieving order:", err);
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Fungsi untuk menambahkan order baru
const addOrder = (userId, productId, requestType, status, callback) => {
  const query = `INSERT INTO orders (user_id, product_id, request_type, status) VALUES (?, ?, ?, ?)`;
  db.query(query, [userId, productId, requestType, status], (err, results) => {
    if (err) {
      console.error("Error inserting order:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk mendapatkan semua order
const getAllOrders = (callback) => {
  const query = `SELECT * FROM orders`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error retrieving orders:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk mendapatkan order berdasarkan user ID
const getOrdersByUserId = (userId, callback) => {
  const query = `SELECT * FROM orders WHERE user_id = ?`;
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Error retrieving orders by user ID:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk memperbarui order
const updateOrder = (
  orderId,
  userId,
  productId,
  requestType,
  status,
  callback
) => {
  const query = `UPDATE orders SET user_id = ?, product_id = ?, request_type = ?, status = ? WHERE order_id = ?`;
  db.query(
    query,
    [userId, productId, requestType, status, orderId],
    (err, results) => {
      if (err) {
        console.error("Error updating order:", err);
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Fungsi untuk menghapus order
const deleteOrder = (orderId, callback) => {
  const query = `DELETE FROM orders WHERE order_id = ?`;
  db.query(query, [orderId], (err, results) => {
    if (err) {
      console.error("Error deleting order:", err);
      return callback(err, null);
    }
    callback(null, results);
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
