const db = require("../../config/db");

const notificationResolvers = {
  Query: {
    getAllNotifications: async () => {
      const [rows] = await db.query("SELECT * FROM notifications");
      return rows;
    },

    getNotificationById: async (_, { id }) => {
      const [rows] = await db.query(
        "SELECT * FROM notifications WHERE notification_id = ?",
        [id]
      );
      return rows[0];
    },

    getNotificationsByUserId: async (_, { userId }) => {
      const [rows] = await db.query(
        "SELECT * FROM notifications WHERE user_id = ?",
        [userId]
      );
      return rows;
    },
  },

  Mutation: {
    addNotification: async (_, { user_id, complaint_id, message, status }) => {
      const [result] = await db.query(
        "INSERT INTO notifications (user_id, complaint_id, message, status) VALUES (?, ?, ?, ?)",
        [user_id, complaint_id, message, status]
      );

      return {
        notification_id: result.insertId,
        user_id,
        complaint_id,
        message,
        status,
      };
    },

    updateNotification: async (
      _,
      { id, user_id, complaint_id, message, status }
    ) => {
      const [result] = await db.query(
        "UPDATE notifications SET user_id = ?, complaint_id = ?, message = ?, status = ? WHERE notification_id = ?",
        [user_id, complaint_id, message, status, id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Notification not found");
      }

      return "Notification updated successfully";
    },

    deleteNotification: async (_, { id }) => {
      const [result] = await db.query(
        "DELETE FROM notifications WHERE notification_id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Notification not found");
      }

      return "Notification deleted successfully";
    },
  },
};

module.exports = notificationResolvers;
