const db = require("../config/db");

const getAllProducts = async () => {
  const [rows] = await db.query("SELECT * FROM products");
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await db.query("SELECT * FROM products WHERE product_id = ?", [
    id,
  ]);
  return rows[0];
};

const addProduct = async (name, type, location, status, description) => {
  const [result] = await db.query(
    "INSERT INTO products (name, type, location, status, description) VALUES (?, ?, ?, ?, ?)",
    [name, type, location, status, description]
  );
  return {
    product_id: result.insertId,
    name,
    type,
    location,
    status,
    description,
  };
};

const updateProduct = async (id, name, type, location, status, description) => {
  await db.query(
    "UPDATE products SET name = ?, type = ?, location = ?, status = ?, description = ? WHERE product_id = ?",
    [name, type, location, status, description, id]
  );
  return {
    product_id: id,
    name,
    type,
    location,
    status,
    description,
  };
};

const deleteProduct = async (id) => {
  await db.query("DELETE FROM products WHERE product_id = ?", [id]);
  return { success: true };
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
