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

module.exports = { getNotificationById, addNotification };
