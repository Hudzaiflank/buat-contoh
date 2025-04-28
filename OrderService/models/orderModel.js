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

module.exports = { getOrderById, addOrder };
