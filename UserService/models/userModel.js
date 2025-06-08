const db = require("../config/db");

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE user_id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

const addUser = (name, email, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password],
      (err, results) => {
        if (err) reject(err);
        else resolve({ user_id: results.insertId, name, email });
      }
    );
  });
};

const updateUser = (id, name, email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE users SET name = ?, email = ? WHERE user_id = ?",
      [name, email, id],
      (err, results) => {
        if (err) reject(err);
        else resolve({ user_id: id, name, email });
      }
    );
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM users WHERE user_id = ?", [id], (err) => {
      if (err) reject(err);
      else resolve({ success: true });
    });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
