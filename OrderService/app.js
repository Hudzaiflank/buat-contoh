const express = require("express");
const app = express();
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json()); // Middleware untuk parsing JSON

// Route untuk OrderService
app.use("/orders", orderRoutes);

app.listen(3005, () => {
  console.log("OrderService is running on http://localhost:3005");
});
