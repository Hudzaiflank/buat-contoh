const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json()); // Middleware untuk parsing JSON

// Route untuk ProductService
app.use("/products", productRoutes);

app.listen(3002, () => {
  console.log("ProductService is running on http://localhost:3002");
});
