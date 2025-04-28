const db = require("../config/db");

// Fungsi untuk mendapatkan keluhan berdasarkan ID
const getComplaintById = (complaintId, callback) => {
  const query = `SELECT * FROM complaints WHERE complaint_id = ?`;
  db.query(query, [complaintId], (err, results) => {
    if (err) {
      console.error("Error retrieving complaint:", err);
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Fungsi untuk menambahkan keluhan baru
const addComplaint = (userId, productId, complaintText, status, callback) => {
  const query = `INSERT INTO complaints (user_id, product_id, complaint_text, status) VALUES (?, ?, ?, ?)`;
  db.query(
    query,
    [userId, productId, complaintText, status],
    (err, results) => {
      if (err) {
        console.error("Error inserting complaint:", err);
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Fungsi untuk memperbarui status keluhan
const updateComplaint = (complaintId, status, callback) => {
  const query = `UPDATE complaints SET status = ? WHERE complaint_id = ?`;
  db.query(query, [status, complaintId], (err, results) => {
    if (err) {
      console.error("Error updating complaint:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk menghapus keluhan
const deleteComplaint = (complaintId, callback) => {
  const query = `DELETE FROM complaints WHERE complaint_id = ?`;
  db.query(query, [complaintId], (err, results) => {
    if (err) {
      console.error("Error deleting complaint:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  getComplaintById,
  addComplaint,
  updateComplaint,
  deleteComplaint,
};
