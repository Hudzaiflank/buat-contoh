const express = require("express");
const app = express();
const notificationRoutes = require("./routes/notificationRoutes");

app.use(express.json()); // Middleware untuk parsing JSON

// Route untuk NotificationService
app.use("/notifications", notificationRoutes);

app.listen(3004, () => {
  console.log("NotificationService is running on http://localhost:3004");
});
