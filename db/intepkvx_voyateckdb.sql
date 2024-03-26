-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 26, 2024 at 03:48 AM
-- Server version: 10.6.17-MariaDB-cll-lve
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `intepkvx_voyateckdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `username` text DEFAULT NULL,
  `reset_pass_code` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `password`, `created_at`, `updated_at`, `username`, `reset_pass_code`) VALUES
(1, 'Salawu', 'Afolabi', 'salawuhamid9611@gmail.com', '07012011429', '$2y$10$mtWEnAHOUznp4nywGAnlmuIXiiQevYyJwOeAy9dcD.YjzgPilo5Ue', '2024-03-25 15:33:00', NULL, 'devafo', NULL),
(2, 'Salawu', 'Afolabi', 'salawuhamid96@gmail.com', '0701201142927', '$2y$10$muWcolwh7KZRNsrdHkhowOuw8miikZs3GmQRKqrl3LdFO2y9AkhJK', '2024-03-25 15:33:36', NULL, 'devfoly', '7f70e3'),
(3, 'Brady', 'Mcintyre', 'sywadi@mailinator.com', '+1 (135) 892-3616', '$2y$10$rhXJdJMhwL43w40OHyJi7uEcoKaovA/XOgFTHThd7F.g9e/f1jaGC', '2024-03-26 06:06:15', NULL, 'punihygi', NULL),
(4, 'Luke', 'Flowers', 'coqilahy@mailinator.com', '+1 (317) 909-4948', '$2y$10$nD5YcfY5gR3oKg4/FHtuEuBaMpy.NIqmXMyUctTkd9EH5pI7n4tuy', '2024-03-26 06:20:52', NULL, 'biwovivyq', NULL),
(5, 'Amir', 'Santos', 'jenyg@mailinator.com', '+1 (535) 419-1275', '$2y$10$ZSLKYpGzpsc/6/J0gVrbreE76KPUjSfzALNiROGBgNBgZGySIi8lq', '2024-03-26 07:28:04', NULL, 'puxax', NULL),
(6, 'Hamid', 'Salawu', 'dulinolu@mailinator.com', '+1 (122) 531-7303', '$2y$10$wQ2k34/EadYQgKB/FXpkxOIggZIq1Kgrn72yIaPXtC/7.xQZ3OmXm', '2024-03-26 07:33:22', NULL, 'foly', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
