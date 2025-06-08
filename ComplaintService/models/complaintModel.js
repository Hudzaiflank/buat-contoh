const db = require("../config/db");

const getAllComplaints = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM complaints", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getComplaintById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM complaints WHERE complaint_id = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      }
    );
  });
};

const addComplaint = (user_id, product_id, complaint_text, status) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO complaints (user_id, product_id, complaint_text, status) VALUES (?, ?, ?, ?)",
      [user_id, product_id, complaint_text, status],
      (err, results) => {
        if (err) reject(err);
        else
          resolve({
            complaint_id: results.insertId,
            user_id,
            product_id,
            complaint_text,
            status,
          });
      }
    );
  });
};

const updateComplaint = (id, status) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE complaints SET status = ? WHERE complaint_id = ?",
      [status, id],
      (err) => {
        if (err) reject(err);
        else resolve({ complaint_id: id, status });
      }
    );
  });
};

const deleteComplaint = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM complaints WHERE complaint_id = ?", [id], (err) => {
      if (err) reject(err);
      else resolve({ success: true });
    });
  });
};

const getComplaintsByUserId = (user_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM complaints WHERE user_id = ?",
      [user_id],
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
};

module.exports = {
  getAllComplaints,
  getComplaintById,
  addComplaint,
  updateComplaint,
  deleteComplaint,
  getComplaintsByUserId,
};
