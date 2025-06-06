const db = require("../config/db");

// Fungsi untuk mendapatkan notifikasi berdasarkan ID
const getNotificationById = (notificationId, callback) => {
  const query = `SELECT * FROM notifications WHERE notification_id = ?`;
  db.query(query, [notificationId], (err, results) => {
    if (err) {
      console.error("Error retrieving notification:", err);
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Fungsi untuk menambahkan notifikasi baru
const addNotification = (userId, complaintId, message, status, callback) => {
  const query = `INSERT INTO notifications (user_id, complaint_id, message, status) VALUES (?, ?, ?, ?)`;
  db.query(query, [userId, complaintId, message, status], (err, results) => {
    if (err) {
      console.error("Error inserting notification:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk mendapatkan semua notifikasi
const getAllNotifications = (callback) => {
  const query = `SELECT * FROM notifications`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error retrieving notifications:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk mendapatkan notifikasi berdasarkan user ID
const getNotificationsByUserId = (userId, callback) => {
  const query = `SELECT * FROM notifications WHERE user_id = ?`;
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Error retrieving notifications by user ID:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Fungsi untuk memperbarui notifikasi
const updateNotification = (
  notificationId,
  userId,
  complaintId,
  message,
  status,
  callback
) => {
  const query = `UPDATE notifications SET user_id = ?, complaint_id = ?, message = ?, status = ? WHERE notification_id = ?`;
  db.query(
    query,
    [userId, complaintId, message, status, notificationId],
    (err, results) => {
      if (err) {
        console.error("Error updating notification:", err);
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Fungsi untuk menghapus notifikasi
const deleteNotification = (notificationId, callback) => {
  const query = `DELETE FROM notifications WHERE notification_id = ?`;
  db.query(query, [notificationId], (err, results) => {
    if (err) {
      console.error("Error deleting notification:", err);
      return callback(err, null);
    }
    callback(null, results);
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
