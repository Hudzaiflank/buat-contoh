const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Ganti dengan user MySQL Anda
  password: "", // Ganti dengan password MySQL Anda
  database: "user_service_db", // Ganti nama database sesuai kebutuhan
});

db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected to database");
});

module.exports = db;
