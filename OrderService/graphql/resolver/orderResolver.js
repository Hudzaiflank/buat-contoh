const db = require("../../config/db");

const orderResolvers = {
  Query: {
    orders: async () => {
      const [rows] = await db.query("SELECT * FROM orders");
      return rows;
    },

    order: async (_, { order_id }) => {
      const [rows] = await db.query("SELECT * FROM orders WHERE order_id = ?", [
        order_id,
      ]);
      return rows[0];
    },

    ordersByUserId: async (_, { user_id }) => {
      const [rows] = await db.query("SELECT * FROM orders WHERE user_id = ?", [
        user_id,
      ]);
      return rows;
    },
  },

  Mutation: {
    addOrder: async (_, { user_id, product_id, request_type, status }) => {
      const [result] = await db.query(
        "INSERT INTO orders (user_id, product_id, request_type, status) VALUES (?, ?, ?, ?)",
        [user_id, product_id, request_type, status]
      );
      return {
        order_id: result.insertId,
        user_id,
        product_id,
        request_type,
        status,
      };
    },

    updateOrder: async (
      _,
      { order_id, user_id, product_id, request_type, status }
    ) => {
      await db.query(
        "UPDATE orders SET user_id = ?, product_id = ?, request_type = ?, status = ? WHERE order_id = ?",
        [user_id, product_id, request_type, status, order_id]
      );
      return {
        order_id,
        user_id,
        product_id,
        request_type,
        status,
      };
    },

    deleteOrder: async (_, { order_id }) => {
      await db.query("DELETE FROM orders WHERE order_id = ?", [order_id]);
      return "Order deleted successfully";
    },
  },
};

module.exports = orderResolvers;
