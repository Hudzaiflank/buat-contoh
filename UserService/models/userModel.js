const db = require("../config/db");

// Fungsi untuk mendapatkan data user berdasarkan ID
const getUserById = (userId, callback) => {
  const query = `SELECT * FROM users WHERE user_id = ?`;
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Error retrieving user:", err);
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Fungsi untuk menambahkan user
const addUser = (name, email, password, callback) => {
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error("Error inserting user:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk memperbarui user
const updateUser = (userId, name, email, callback) => {
  const query = `UPDATE users SET name = ?, email = ? WHERE user_id = ?`;
  db.query(query, [name, email, userId], (err, results) => {
    if (err) {
      console.error("Error updating user:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk menghapus user
const deleteUser = (userId, callback) => {
  const query = `DELETE FROM users WHERE user_id = ?`;
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Error deleting user:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getUserById, addUser, updateUser, deleteUser };
