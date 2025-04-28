const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Endpoint untuk mendapatkan notifikasi berdasarkan ID
router.get("/:id", notificationController.getNotificationById);

// Endpoint untuk menambahkan notifikasi baru
router.post("/", notificationController.addNotification);

module.exports = router;
