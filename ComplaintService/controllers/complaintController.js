const complaintModel = require("../models/complaintModel");

// Fungsi untuk mendapatkan keluhan berdasarkan ID
const getComplaintById = (req, res) => {
  const complaintId = req.params.id;
  complaintModel.getComplaintById(complaintId, (err, complaint) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving complaint", error: err });
    }
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    res.status(200).json(complaint);
  });
};

// Fungsi untuk menambahkan keluhan baru
const addComplaint = (req, res) => {
  const { userId, productId, complaintText, status } = req.body;
  complaintModel.addComplaint(
    userId,
    productId,
    complaintText,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding complaint", error: err });
      }
      res.status(201).json({
        message: "Complaint added successfully",
        complaintId: results.insertId,
      });
    }
  );
};

// Fungsi untuk memperbarui status keluhan
const updateComplaint = (req, res) => {
  const { status } = req.body;
  const complaintId = req.params.id;
  complaintModel.updateComplaint(complaintId, status, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error updating complaint", error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    res.status(200).json({ message: "Complaint updated successfully" });
  });
};

// Fungsi untuk menghapus keluhan
const deleteComplaint = (req, res) => {
  const complaintId = req.params.id;
  complaintModel.deleteComplaint(complaintId, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting complaint", error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    res.status(200).json({ message: "Complaint deleted successfully" });
  });
};

// Fungsi untuk mendapatkan semua keluhan
const getAllComplaints = (req, res) => {
  complaintModel.getAllComplaints((err, complaints) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving complaints", error: err });
    }
    res.status(200).json(complaints);
  });
};

// Fungsi untuk mendapatkan keluhan berdasarkan user ID
const getComplaintsByUserId = (req, res) => {
  const userId = req.params.userId;
  complaintModel.getComplaintsByUserId(userId, (err, complaints) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving complaints", error: err });
    }
    res.status(200).json(complaints);
  });
};

module.exports = {
  getComplaintById,
  addComplaint,
  updateComplaint,
  deleteComplaint,
  getAllComplaints,
  getComplaintsByUserId,
};
