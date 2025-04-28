const db = require("../config/db");

// Fungsi untuk mendapatkan data produk berdasarkan ID
const getProductById = (productId, callback) => {
  const query = `SELECT * FROM products WHERE product_id = ?`;
  db.query(query, [productId], (err, results) => {
    if (err) {
      console.error("Error retrieving product:", err);
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Fungsi untuk menambahkan produk baru
const addProduct = (name, type, location, status, description, callback) => {
  const query = `INSERT INTO products (name, type, location, status, description) VALUES (?, ?, ?, ?, ?)`;
  db.query(
    query,
    [name, type, location, status, description],
    (err, results) => {
      if (err) {
        console.error("Error inserting product:", err);
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Fungsi untuk memperbarui produk
const updateProduct = (
  productId,
  name,
  type,
  location,
  status,
  description,
  callback
) => {
  const query = `UPDATE products SET name = ?, type = ?, location = ?, status = ?, description = ? WHERE product_id = ?`;
  db.query(
    query,
    [name, type, location, status, description, productId],
    (err, results) => {
      if (err) {
        console.error("Error updating product:", err);
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Fungsi untuk menghapus produk
const deleteProduct = (productId, callback) => {
  const query = `DELETE FROM products WHERE product_id = ?`;
  db.query(query, [productId], (err, results) => {
    if (err) {
      console.error("Error deleting product:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getProductById, addProduct, updateProduct, deleteProduct };
