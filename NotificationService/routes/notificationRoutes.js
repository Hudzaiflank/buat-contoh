const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Endpoint untuk mendapatkan semua notifikasi
router.get("/", notificationController.getAllNotifications);

// Endpoint untuk mendapatkan notifikasi berdasarkan user ID
router.get("/user/:userId", notificationController.getNotificationsByUserId);

// Endpoint untuk mendapatkan notifikasi berdasarkan ID
router.get("/:id", notificationController.getNotificationById);

// Endpoint untuk menambahkan notifikasi baru
router.post("/", notificationController.addNotification);

// Endpoint untuk memperbarui notifikasi
router.put("/:id", notificationController.updateNotification);

// Endpoint untuk menghapus notifikasi
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
