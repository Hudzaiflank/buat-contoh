const notificationModel = require("../models/notificationModel");

// Fungsi untuk mendapatkan notifikasi berdasarkan ID
const getNotificationById = (req, res) => {
  const notificationId = req.params.id;
  notificationModel.getNotificationById(notificationId, (err, notification) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving notification", error: err });
    }
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.status(200).json(notification);
  });
};

// Fungsi untuk menambahkan notifikasi baru
const addNotification = (req, res) => {
  const { userId, complaintId, message, status } = req.body;
  notificationModel.addNotification(
    userId,
    complaintId,
    message,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding notification", error: err });
      }
      res
        .status(201)
        .json({
          message: "Notification added successfully",
          notificationId: results.insertId,
        });
    }
  );
};

module.exports = { getNotificationById, addNotification };
