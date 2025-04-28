const userModel = require("../models/userModel");

// Fungsi untuk mendapatkan user berdasarkan ID
const getUserById = (req, res) => {
  const userId = req.params.id;
  userModel.getUserById(userId, (err, user) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving user", error: err });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  });
};

// Fungsi untuk menambahkan user baru
const addUser = (req, res) => {
  const { name, email, password } = req.body;
  userModel.addUser(name, email, password, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error adding user", error: err });
    }
    res
      .status(201)
      .json({ message: "User added successfully", userId: results.insertId });
  });
};

// Fungsi untuk memperbarui user
const updateUser = (req, res) => {
  const { name, email } = req.body;
  const userId = req.params.id;
  userModel.updateUser(userId, name, email, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error updating user", error: err });
    }
    res.status(200).json({ message: "User updated successfully" });
  });
};

// Fungsi untuk menghapus user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  userModel.deleteUser(userId, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting user", error: err });
    }
    res.status(200).json({ message: "User deleted successfully" });
  });
};

module.exports = { getUserById, addUser, updateUser, deleteUser };
