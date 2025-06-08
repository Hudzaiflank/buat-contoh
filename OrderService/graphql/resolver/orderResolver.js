// graphql/resolver/orderResolver.js
const db = require("../../config/db");

const orderResolvers = {
  Query: {
    orders: (_, __) => {
      return new Promise((resolve, reject) => {
        db.query("SELECT * FROM orders", (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      });
    },
    order: (_, { order_id }) => {
      return new Promise((resolve, reject) => {
        db.query(
          "SELECT * FROM orders WHERE order_id = ?",
          [order_id],
          (err, results) => {
            if (err) reject(err);
            else resolve(results[0]);
          }
        );
      });
    },
    ordersByUserId: (_, { user_id }) => {
      return new Promise((resolve, reject) => {
        db.query(
          "SELECT * FROM orders WHERE user_id = ?",
          [user_id],
          (err, results) => {
            if (err) reject(err);
            else resolve(results);
          }
        );
      });
    },
  },
  Mutation: {
    addOrder: (_, { user_id, product_id, request_type, status }) => {
      return new Promise((resolve, reject) => {
        const query = `
          INSERT INTO orders (user_id, product_id, request_type, status)
          VALUES (?, ?, ?, ?)
        `;
        db.query(
          query,
          [user_id, product_id, request_type, status],
          (err, result) => {
            if (err) reject(err);
            else {
              resolve({
                order_id: result.insertId,
                user_id,
                product_id,
                request_type,
                status,
              });
            }
          }
        );
      });
    },
    updateOrder: (
      _,
      { order_id, user_id, product_id, request_type, status }
    ) => {
      return new Promise((resolve, reject) => {
        const query = `
          UPDATE orders 
          SET user_id = ?, product_id = ?, request_type = ?, status = ?
          WHERE order_id = ?
        `;
        db.query(
          query,
          [user_id, product_id, request_type, status, order_id],
          (err, result) => {
            if (err) reject(err);
            else {
              resolve({
                order_id,
                user_id,
                product_id,
                request_type,
                status,
              });
            }
          }
        );
      });
    },
    deleteOrder: (_, { order_id }) => {
      return new Promise((resolve, reject) => {
        db.query(
          "DELETE FROM orders WHERE order_id = ?",
          [order_id],
          (err, result) => {
            if (err) reject(err);
            else resolve("Order deleted successfully");
          }
        );
      });
    },
  },
};

module.exports = orderResolvers;
