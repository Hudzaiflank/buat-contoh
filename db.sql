-- Membuat database baru
CREATE DATABASE IF NOT EXISTS user_service_db;
USE user_service_db;

-- Tabel users: Menyimpan data pengguna
CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel products: Menyimpan data fasilitas (produk) yang dikelola
CREATE TABLE IF NOT EXISTS products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,      -- Jenis fasilitas (misalnya jalan, taman)
  location VARCHAR(255),           -- Lokasi fasilitas
  status VARCHAR(100),             -- Status fasilitas (misalnya baik, rusak)
  description TEXT,                -- Deskripsi fasilitas
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel complaints: Menyimpan data keluhan pengguna terkait fasilitas
CREATE TABLE IF NOT EXISTS complaints (
  complaint_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,                      -- Mengacu ke tabel users
  product_id INT,                   -- Mengacu ke tabel products
  complaint_text TEXT,              -- Deskripsi keluhan
  status VARCHAR(100),              -- Status keluhan (misalnya: pending, resolved)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),         -- Relasi dengan tabel users
  FOREIGN KEY (product_id) REFERENCES products(product_id) -- Relasi dengan tabel products
);

-- Tabel orders: Menyimpan permintaan perbaikan atau pemeliharaan fasilitas
CREATE TABLE IF NOT EXISTS orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,                         -- Mengacu ke tabel users
  product_id INT,                      -- Mengacu ke tabel products
  request_type VARCHAR(255),           -- Jenis permintaan (misalnya: perbaikan, pemeliharaan)
  status VARCHAR(100),                 -- Status pesanan (misalnya: menunggu, diproses, selesai)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),      -- Relasi dengan tabel users
  FOREIGN KEY (product_id) REFERENCES products(product_id)  -- Relasi dengan tabel products
);

-- Tabel notifications: Menyimpan data notifikasi terkait status keluhan atau pemesanan
CREATE TABLE IF NOT EXISTS notifications (
  notification_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,                         -- Mengacu ke tabel users
  complaint_id INT,                    -- Mengacu ke tabel complaints
  message TEXT,                        -- Pesan notifikasi
  status VARCHAR(100),                 -- Status notifikasi (misalnya: sent, pending)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),      -- Relasi dengan tabel users
  FOREIGN KEY (complaint_id) REFERENCES complaints(complaint_id)  -- Relasi dengan tabel complaints
);
