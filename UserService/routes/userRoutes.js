const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Endpoint untuk mendapatkan user berdasarkan ID
router.get("/:id", userController.getUserById);

// Endpoint untuk menambahkan user baru
router.post("/", userController.addUser);

// Endpoint untuk memperbarui user berdasarkan ID
router.put("/:id", userController.updateUser);

// Endpoint untuk menghapus user berdasarkan ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
