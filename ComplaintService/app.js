const express = require("express");
const app = express();
const complaintRoutes = require("./routes/complaintRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json()); // Middleware untuk parsing JSON

// Route untuk ComplaintService
app.use("/complaints", complaintRoutes);

app.listen(3003, () => {
  console.log("ComplaintService is running on http://localhost:3003");
});
