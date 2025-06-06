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
      res.status(201).json({
        message: "Notification added successfully",
        notificationId: results.insertId,
      });
    }
  );
};

// Fungsi untuk mendapatkan semua notifikasi
const getAllNotifications = (req, res) => {
  notificationModel.getAllNotifications((err, notifications) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving notifications", error: err });
    }
    res.status(200).json(notifications);
  });
};

// Fungsi untuk mendapatkan notifikasi berdasarkan user ID
const getNotificationsByUserId = (req, res) => {
  const userId = req.params.userId;
  notificationModel.getNotificationsByUserId(userId, (err, notifications) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving notifications", error: err });
    }
    res.status(200).json(notifications);
  });
};

// Fungsi untuk memperbarui notifikasi
const updateNotification = (req, res) => {
  const notificationId = req.params.id;
  const { userId, complaintId, message, status } = req.body;
  notificationModel.updateNotification(
    notificationId,
    userId,
    complaintId,
    message,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error updating notification", error: err });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Notification not found" });
      }
      res.status(200).json({ message: "Notification updated successfully" });
    }
  );
};

// Fungsi untuk menghapus notifikasi
const deleteNotification = (req, res) => {
  const notificationId = req.params.id;
  notificationModel.deleteNotification(notificationId, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting notification", error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.status(200).json({ message: "Notification deleted successfully" });
  });
};

module.exports = {
  getNotificationById,
  addNotification,
  getAllNotifications,
  getNotificationsByUserId,
  updateNotification,
  deleteNotification,
};
