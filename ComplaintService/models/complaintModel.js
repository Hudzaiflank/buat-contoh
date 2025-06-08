const db = require("../config/db");

const getAllComplaints = async () => {
  const [rows] = await db.query("SELECT * FROM complaints");
  return rows;
};

const getComplaintById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM complaints WHERE complaint_id = ?",
    [id]
  );
  return rows[0];
};

const addComplaint = async (user_id, product_id, complaint_text, status) => {
  const [result] = await db.query(
    "INSERT INTO complaints (user_id, product_id, complaint_text, status) VALUES (?, ?, ?, ?)",
    [user_id, product_id, complaint_text, status]
  );
  return {
    complaint_id: result.insertId,
    user_id,
    product_id,
    complaint_text,
    status,
  };
};

const updateComplaint = async (id, status) => {
  await db.query("UPDATE complaints SET status = ? WHERE complaint_id = ?", [
    status,
    id,
  ]);
  return { complaint_id: id, status };
};

const deleteComplaint = async (id) => {
  await db.query("DELETE FROM complaints WHERE complaint_id = ?", [id]);
  return { success: true };
};

const getComplaintsByUserId = async (user_id) => {
  const [rows] = await db.query("SELECT * FROM complaints WHERE user_id = ?", [
    user_id,
  ]);
  return rows;
};

module.exports = {
  getAllComplaints,
  getComplaintById,
  addComplaint,
  updateComplaint,
  deleteComplaint,
  getComplaintsByUserId,
};
