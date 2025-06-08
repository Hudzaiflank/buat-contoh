const db = require("../config/db");

const getNotificationById = async (notificationId) => {
  const [rows] = await db.query(
    "SELECT * FROM notifications WHERE notification_id = ?",
    [notificationId]
  );
  return rows[0];
};

const addNotification = async (userId, complaintId, message, status) => {
  const [result] = await db.query(
    "INSERT INTO notifications (user_id, complaint_id, message, status) VALUES (?, ?, ?, ?)",
    [userId, complaintId, message, status]
  );
  return {
    notification_id: result.insertId,
    userId,
    complaintId,
    message,
    status,
  };
};

const getAllNotifications = async () => {
  const [rows] = await db.query("SELECT * FROM notifications");
  return rows;
};

const getNotificationsByUserId = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM notifications WHERE user_id = ?",
    [userId]
  );
  return rows;
};

const updateNotification = async (
  notificationId,
  userId,
  complaintId,
  message,
  status
) => {
  await db.query(
    "UPDATE notifications SET user_id = ?, complaint_id = ?, message = ?, status = ? WHERE notification_id = ?",
    [userId, complaintId, message, status, notificationId]
  );
  return {
    notification_id: notificationId,
    userId,
    complaintId,
    message,
    status,
  };
};

const deleteNotification = async (notificationId) => {
  await db.query("DELETE FROM notifications WHERE notification_id = ?", [
    notificationId,
  ]);
  return { success: true };
};

module.exports = {
  getNotificationById,
  addNotification,
  getAllNotifications,
  getNotificationsByUserId,
  updateNotification,
  deleteNotification,
};
