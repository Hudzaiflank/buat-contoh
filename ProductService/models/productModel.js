const db = require("../config/db");

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM products WHERE product_id = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      }
    );
  });
};

const addProduct = (name, type, location, status, description) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO products (name, type, location, status, description) VALUES (?, ?, ?, ?, ?)",
      [name, type, location, status, description],
      (err, results) => {
        if (err) reject(err);
        else
          resolve({
            product_id: results.insertId,
            name,
            type,
            location,
            status,
            description,
          });
      }
    );
  });
};

const updateProduct = (id, name, type, location, status, description) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE products SET name = ?, type = ?, location = ?, status = ?, description = ? WHERE product_id = ?",
      [name, type, location, status, description, id],
      (err) => {
        if (err) reject(err);
        else
          resolve({
            product_id: id,
            name,
            type,
            location,
            status,
            description,
          });
      }
    );
  });
};

const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM products WHERE product_id = ?", [id], (err) => {
      if (err) reject(err);
      else resolve({ success: true });
    });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
