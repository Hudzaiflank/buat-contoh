const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json()); // Middleware untuk parsing JSON

// Route untuk UserService
app.use("/users", userRoutes);

app.listen(3001, () => {
  console.log("UserService is running on http://localhost:3001");
});
