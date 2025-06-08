const db = require("../config/db");

const getAllUsers = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.query("SELECT * FROM users WHERE user_id = ?", [id]);
  return rows[0];
};

const addUser = async (name, email, password) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return { user_id: result.insertId, name, email };
};

const updateUser = async (id, name, email) => {
  await db.query("UPDATE users SET name = ?, email = ? WHERE user_id = ?", [
    name,
    email,
    id,
  ]);
  return { user_id: id, name, email };
};

const deleteUser = async (id) => {
  await db.query("DELETE FROM users WHERE user_id = ?", [id]);
  return { success: true };
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
