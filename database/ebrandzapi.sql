-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2020 at 07:24 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebrandzapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_number` varchar(250) NOT NULL,
  `date_of_birth` varchar(20) NOT NULL,
  `address` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `contact_number`, `date_of_birth`, `address`) VALUES
(1, 'Shubham', 'Singh', 'scgaurav@gmail.com', '6387454414', '24-06-1998', 'Mumbai'),
(2, 'Gaurav', 'Singh', 'scgaurav@gmail.com', '9695029136', '24-06-1998', 'Mumbai'),
(3, 'Gaurav', 'hjgjh', 'scgauravsngh@gmail.com', '9695029136', '2020-10-14T04:00:00.', 'Varanasi'),
(4, 'Gaurav', 'hjgjh', 'scgauravsngh@gmail.com', '9695029136', '2020-10-14T04:00:00.', 'Varanasi'),
(5, 'Gaurav', 'hjgjh', 'scgauravsngh@gmail.com', '9695029136', '2020-10-14T04:00:00.', 'Varanasi'),
(6, 'Gaurav', 'hjgjh', 'scgauravsngh@gmail.com', '9695029136', '2020-10-14T04:00:00.', 'Varanasi'),
(7, 'Aayush', 'Singh', 'saucom99@gmail.com', '6387454414', '2020-10-30T04:00:00.', 'Varanasi'),
(8, 'Shivam', 'Singh', 'saucom99@gmail.com', '6387454414', '2020-10-30T04:00:00.', 'Varanasi');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
