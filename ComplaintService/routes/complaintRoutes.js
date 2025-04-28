const express = require("express");
const router = express.Router();
const complaintController = require("../controllers/complaintController");

// Endpoint untuk mendapatkan keluhan berdasarkan ID
router.get("/:id", complaintController.getComplaintById);

// Endpoint untuk menambahkan keluhan baru
router.post("/", complaintController.addComplaint);

// Endpoint untuk memperbarui status keluhan berdasarkan ID
router.put("/:id", complaintController.updateComplaint);

// Endpoint untuk menghapus keluhan berdasarkan ID
router.delete("/:id", complaintController.deleteComplaint);

module.exports = router;
