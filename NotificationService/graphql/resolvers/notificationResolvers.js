const db = require("../../config/db");

const notificationResolvers = {
  Query: {
    getAllNotifications: () => {
      return new Promise((resolve, reject) => {
        db.query("SELECT * FROM notifications", (err, results) => {
          if (err) reject(err);
          resolve(results);
        });
      });
    },
    getNotificationById: (_, { id }) => {
      return new Promise((resolve, reject) => {
        db.query(
          "SELECT * FROM notifications WHERE notification_id = ?",
          [id],
          (err, results) => {
            if (err) reject(err);
            resolve(results[0]);
          }
        );
      });
    },
    getNotificationsByUserId: (_, { userId }) => {
      return new Promise((resolve, reject) => {
        db.query(
          "SELECT * FROM notifications WHERE user_id = ?",
          [userId],
          (err, results) => {
            if (err) reject(err);
            resolve(results);
          }
        );
      });
    },
  },

  Mutation: {
    addNotification: (_, { user_id, complaint_id, message, status }) => {
      return new Promise((resolve, reject) => {
        const query =
          "INSERT INTO notifications (user_id, complaint_id, message, status) VALUES (?, ?, ?, ?)";
        db.query(
          query,
          [user_id, complaint_id, message, status],
          (err, results) => {
            if (err) reject(err);
            resolve({
              notification_id: results.insertId,
              user_id,
              complaint_id,
              message,
              status,
            });
          }
        );
      });
    },
    updateNotification: (_, { id, user_id, complaint_id, message, status }) => {
      return new Promise((resolve, reject) => {
        const query =
          "UPDATE notifications SET user_id=?, complaint_id=?, message=?, status=? WHERE notification_id=?";
        db.query(
          query,
          [user_id, complaint_id, message, status, id],
          (err, results) => {
            if (err) reject("Update failed");
            if (results.affectedRows === 0) reject("Notification not found");
            resolve("Notification updated successfully");
          }
        );
      });
    },
    deleteNotification: (_, { id }) => {
      return new Promise((resolve, reject) => {
        const query = "DELETE FROM notifications WHERE notification_id = ?";
        db.query(query, [id], (err, results) => {
          if (err) reject("Delete failed");
          if (results.affectedRows === 0) reject("Notification not found");
          resolve("Notification deleted successfully");
        });
      });
    },
  },
};

module.exports = notificationResolvers;
