-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2025 at 10:14 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

CREATE DATABASE user_service_db;
USE user_service_db;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_service_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `complaint_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `complaint_text` text DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complaints`
--

INSERT INTO `complaints` (`complaint_id`, `user_id`, `product_id`, `complaint_text`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Jalan banyak berlubang di sepanjang jalan raya.', 'Pending', '2025-05-06 15:31:45', '2025-05-06 15:31:45'),
(2, 2, 2, 'Taman kurang terawat dan banyak sampah.', 'Resolved', '2025-05-06 15:31:45', '2025-05-06 15:31:45'),
(3, 3, 3, 'Jembatan sudah retak dan perlu perbaikan segera.', 'In-progress', '2025-05-06 15:31:45', '2025-05-06 15:31:45'),
(4, 1, 1, 'Jalan banyak berlubang di sepanjang jalan raya.', 'Pending', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(5, 2, 2, 'Taman kurang terawat dan banyak sampah.', 'Resolved', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(6, 3, 3, 'Jembatan sudah retak dan perlu perbaikan segera.', 'In-progress', '2025-05-06 16:07:18', '2025-05-06 16:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `complaint_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`notification_id`, `user_id`, `complaint_id`, `message`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Keluhan Anda tentang jalan raya telah diterima dan sedang diproses.', 'Sent', '2025-05-06 15:36:49', '2025-05-06 15:36:49'),
(2, 2, 2, 'Keluhan Anda tentang taman kota telah diselesaikan.', 'Sent', '2025-05-06 15:36:49', '2025-05-06 15:36:49'),
(3, 3, 3, 'Keluhan Anda tentang jembatan sedang diproses.', 'Pending', '2025-05-06 15:36:49', '2025-05-06 15:36:49'),
(4, 1, 1, 'Keluhan Anda tentang jalan raya telah diterima dan sedang diproses.', 'Sent', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(5, 2, 2, 'Keluhan Anda tentang taman kota telah diselesaikan.', 'Sent', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(6, 3, 3, 'Keluhan Anda tentang jembatan sedang diproses.', 'Pending', '2025-05-06 16:07:18', '2025-05-06 16:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `request_type` varchar(255) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `product_id`, `request_type`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Perbaikan', 'Pending', '2025-05-06 15:43:50', '2025-05-06 15:43:50'),
(2, 2, 2, 'Pemeliharaan', 'Resolved', '2025-05-06 15:43:50', '2025-05-06 15:43:50'),
(3, 3, 3, 'Perbaikan', 'In-progress', '2025-05-06 15:43:50', '2025-05-06 15:43:50'),
(4, 1, 1, 'Perbaikan', 'Pending', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(5, 2, 2, 'Pemeliharaan', 'Resolved', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(6, 3, 3, 'Perbaikan', 'In-progress', '2025-05-06 16:07:18', '2025-05-06 16:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `type`, `location`, `status`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Jalan Raya', 'Jalan', 'Jakarta', 'Rusak', 'Jalan banyak berlubang', '2025-05-06 15:26:12', '2025-05-06 15:26:12'),
(2, 'Taman Kota', 'Taman', 'Bandung', 'Baik', 'Taman dengan banyak pohon', '2025-05-06 15:26:12', '2025-05-06 15:26:12'),
(3, 'Villa Puncak Deluxe', 'Villa', 'Puncak, Bogor', 'Disewa', 'Villa mewah dengan pemandangan pegunungan dan kolam renang pribadi', '2025-05-06 15:26:12', '2025-06-06 07:56:27'),
(4, 'Jalan Raya', 'Jalan', 'Jakarta', 'Rusak', 'Jalan banyak berlubang', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(5, 'Taman Kota', 'Taman', 'Bandung', 'Baik', 'Taman dengan banyak pohon', '2025-05-06 16:07:18', '2025-05-06 16:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Budi Santoso Wijaya', 'budi.wijaya@example.com', 'password123', '2025-05-06 15:12:22', '2025-06-06 07:26:02'),
(2, 'Budi Santoso', 'budi@example.com', 'password456', '2025-05-06 15:12:22', '2025-05-06 15:12:22'),
(3, 'Cici Wulandari', 'cici@example.com', 'password789', '2025-05-06 15:12:22', '2025-05-06 15:12:22'),
(4, 'John Doe', 'john.doe@example.com', '', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(5, 'Jane Smith', 'jane.smith@example.com', '', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(6, 'Robert Johnson', 'robert.johnson@example.com', '', '2025-05-06 16:07:18', '2025-05-06 16:07:18'),
(12, 'Budi Santoso', 'budi1234@example.com', 'rahasia123', '2025-06-06 07:27:33', '2025-06-06 07:27:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`complaint_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `complaint_id` (`complaint_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `complaints`
--
ALTER TABLE `complaints`
  ADD CONSTRAINT `complaints_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `complaints_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`complaint_id`) REFERENCES `complaints` (`complaint_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
