-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2021 at 03:02 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ams`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `lecture_id` int(3) NOT NULL,
  `course_id` int(3) NOT NULL,
  `enrollment_no` varchar(11) NOT NULL,
  `stat` varchar(255) NOT NULL DEFAULT 'Absent',
  `in_time` time DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`lecture_id`, `course_id`, `enrollment_no`, `stat`, `in_time`) VALUES
(1, 1, 'BE18F05F007', 'Present', '18:57:03'),
(1, 1, 'BE18F05F001', 'Absent', '17:46:58'),
(1, 1, 'BE18F05F002', 'Absent', '17:50:21'),
(1, 1, 'BE18F05F003', 'Absent', '17:50:22'),
(1, 1, 'BE18F05F004', 'Present', '15:19:28'),
(1, 1, 'BE18F05F005', 'Present', '15:19:17'),
(1, 1, 'BE18F05F006', 'Present', '15:19:37'),
(1, 1, 'BE18F05F010', 'Absent', '17:50:22'),
(1, 1, 'BE18F05F008', 'Absent', '17:50:22'),
(1, 1, 'BE18F05F009', 'Absent', '17:50:22'),
(2, 2, 'BE18F05F001', 'Absent', '17:50:22'),
(2, 2, 'BE18F05F002', 'Absent', '17:50:23'),
(2, 2, 'BE18F05F003', 'Absent', '17:50:23'),
(2, 2, 'BE18F05F004', 'Present', '15:19:28'),
(2, 2, 'BE18F05F005', 'Present', '15:19:17'),
(2, 2, 'BE18F05F006', 'Present', '15:19:37'),
(2, 2, 'BE18F05F007', 'Present', '18:57:03'),
(2, 2, 'BE18F05F008', 'Absent', '17:50:24'),
(2, 2, 'BE18F05F009', 'Absent', '17:50:24'),
(2, 2, 'BE18F05F010', 'Absent', '17:50:24'),
(3, 3, 'BE18F05F001', 'Absent', '17:50:24'),
(3, 3, 'BE18F05F002', 'Absent', '17:50:24'),
(3, 3, 'BE18F05F003', 'Absent', '17:50:25'),
(3, 3, 'BE18F05F004', 'Present', '15:19:28'),
(3, 3, 'BE18F05F005', 'Present', '15:19:17'),
(3, 3, 'BE18F05F006', 'Present', '15:19:37'),
(3, 3, 'BE18F05F007', 'Present', '18:57:03'),
(3, 3, 'BE18F05F008', 'Absent', '17:50:25'),
(3, 3, 'BE18F05F009', 'Absent', '17:50:25'),
(3, 3, 'BE18F05F010', 'Absent', '17:50:25'),
(4, 4, 'BE18F05F007', 'Present', '18:57:03'),
(0, 0, 'BE18F05F001', 'Absent', '15:15:57'),
(0, 0, 'BE18F05F002', 'Absent', '15:15:57'),
(0, 0, 'BE18F05F003', 'Absent', '15:15:57'),
(0, 0, 'BE18F05F004', 'Present', '15:19:28'),
(0, 0, 'BE18F05F005', 'Present', '15:19:17'),
(0, 0, 'BE18F05F006', 'Present', '15:19:37'),
(0, 0, 'BE18F05F007', 'Present', '18:57:03'),
(0, 0, 'BE18F05F008', 'Absent', '15:15:57'),
(0, 0, 'BE18F05F009', 'Absent', '15:15:57'),
(0, 0, 'BE18F05F010', 'Absent', '15:15:57');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `course` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course`) VALUES
(1, 'CS3005:Data Mining and warehousing'),
(2, 'CS3002:Operating System'),
(3, 'CS3003:Theory of Computation'),
(4, 'CS3001:Design and Analysis of Algorithm'),
(5, 'CS4008:PL1 Cloud Computing'),
(6, 'CS3004:Software Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id` int(3) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `course` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `fpassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `fname`, `course`, `email_id`, `fpassword`) VALUES
(30, 'Olive Yew', 'CS3002:Operating System', 'oy@faculty.com', '$2y$10$xMSmZPKhzad5iAvorcDRLOQjLl3LtBrkmDVVhXXALhlFZotKcnkBK'),
(31, 'Aida Bugg.', 'CS3005:Data Mining and warehousing', 'ab@faculty.com', '$2y$10$RF3k2520ymYqTUlRb/Sm6u7PVYhQFm7EY/7qWK6FsqM8UIiv8EFVq'),
(32, 'Teri Dactyl', 'CS3003:Theory of Computation', 'td@faculty.com', '$2y$10$pB27QJW97wo8r1TqZTAake98mIlrXWWFzwD13k8nOEx6ClDf6ULje'),
(33, 'XYZ', 'CS3001:Design and Analysis of Algorithm', 'x@faculty.com', '$2y$10$6NNijU3TzlzXTZXSGzDYe.fFqdXYQxYrGQAE7sy.4G0lUkxzenEpC'),
(34, 'abb', 'CS3002:Operating System', 'abb@faculty.com', '$2y$10$4MORMVNH8wMlbdpI6WFmMe9B.PB1SPl.JanCjPHdLPsjpf3Wvl9BK');

-- --------------------------------------------------------

--
-- Table structure for table `lectures`
--

CREATE TABLE `lectures` (
  `lecture_id` int(3) NOT NULL,
  `course` varchar(255) NOT NULL,
  `ldate` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lectures`
--

INSERT INTO `lectures` (`lecture_id`, `course`, `ldate`, `start_time`, `end_time`) VALUES
(1, 'CS3003:Theory of Computation', '2020-12-18', '10:00:00', '10:00:00'),
(2, 'CS3005:Data Mining and warehousing', '2020-12-18', '10:00:00', '10:00:00'),
(3, 'CS3005:Data Mining and warehousing', '2020-12-14', '10:00:00', '10:00:00'),
(4, 'CS3005:Data Mining and warehousing', '2020-12-18', '12:26:00', '13:25:00'),
(5, 'CS3005:Data Mining and warehousing', '2020-12-18', '11:00:00', '12:00:00'),
(6, 'CS3005:Data Mining and warehousing', '2020-12-19', '23:00:00', '12:00:00'),
(7, 'CS3005:Data Mining and warehousing', '2020-12-19', '13:00:00', '14:00:00'),
(8, 'CS3005:Data Mining and warehousing', '2020-12-17', '16:00:00', '17:00:00'),
(9, 'CS3005:Data Mining and warehousing', '2020-12-17', '16:00:00', '17:00:00'),
(10, 'CS3005:Data Mining and warehousing', '2020-12-18', '16:00:00', '17:00:00'),
(11, 'CS3005:Data Mining and warehousing', '2020-12-18', '16:00:00', '17:00:00'),
(12, 'CS3005:Data Mining and warehousing', '2020-12-19', '17:00:00', '18:00:00'),
(13, 'CS3005:Data Mining and warehousing', '2020-12-17', '17:00:00', '18:00:00'),
(14, 'CS3005:Data Mining and warehousing', '2020-12-17', '17:00:00', '18:00:00'),
(15, 'CS3005:Data Mining and warehousing', '2020-12-18', '17:00:00', '18:00:00'),
(16, 'CS3005:Data Mining and warehousing', '2020-12-20', '15:00:00', '16:00:00'),
(17, 'CS3003:Theory of Computation', '2020-12-20', '15:00:00', '16:00:00'),
(18, 'CS3002:Operating System', '2020-12-20', '15:00:00', '16:00:00'),
(24, 'CS3005:Data Mining and warehousing', '2020-12-15', '11:00:00', '12:00:00'),
(25, 'CS3005:Data Mining and warehousing', '2020-12-23', '10:00:00', '10:00:00'),
(26, 'CS3005:Data Mining and warehousing', '2020-12-30', '10:00:00', '10:00:00'),
(27, 'CS3005:Data Mining and warehousing', '2020-12-23', '10:00:00', '10:00:00'),
(28, 'CS3005:Data Mining and warehousing', '2020-12-23', '10:00:00', '10:00:00'),
(29, 'CS3002:Operating System', '2021-09-09', '10:00:00', '10:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(3) NOT NULL,
  `enrollment_no` varchar(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `in_time` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `enrollment_no`, `date`, `in_time`) VALUES
(1, 'BE18F05F001', '2020-12-18', '16:57:46'),
(2, 'BE18F05F007', '2020-12-18', '17:01:21'),
(3, 'BE18F05F006', '2020-12-20', '15:22:17'),
(4, 'BE18F05F013', '2020-12-20', '15:22:47'),
(5, 'BE18F05F06', '2020-12-20', '15:24:40'),
(6, '15713698', '2020-12-20', '15:25:29'),
(7, 'BE18F05F007', '2020-12-20', '15:28:47'),
(8, 'BE18F05F010', '2020-12-20', '15:29:34'),
(9, 'BE18F05F011', '2020-12-20', '15:30:12'),
(10, 'BE18F05F007', '2020-12-23', '10:49:49'),
(11, 'BE18F05F007', '2020-12-23', '10:50:08');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(3) NOT NULL,
  `sname` varchar(255) NOT NULL,
  `enrollment_no` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `semester` int(2) NOT NULL,
  `course` varchar(100) NOT NULL,
  `spassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `sname`, `enrollment_no`, `email_id`, `semester`, `course`, `spassword`) VALUES
(9, 'student1', 'BE18F05F001', 'student1@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(10, 'student2', 'BE18F05F002', 'student2@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(11, 'student3', 'BE18F05F003', 'student3@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(12, 'student4', 'BE18F05F004', 'student4@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(13, 'student5', 'BE18F05F005', 'student5@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(14, 'student6', 'BE18F05F006', 'student6@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(15, 'student7', 'BE18F05F007', 'student7@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(16, 'student8', 'BE18F05F008', 'student8@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(17, 'student9', 'BE18F05F009', 'student9@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(18, 'student10', 'BE18F05F010', 'student10@student.com', 5, 'CS3005:Data Mining and warehousing', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(19, 'student1', 'BE18F05F001', 'student1@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(20, 'student2', 'BE18F05F002', 'student2@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(21, 'student3', 'BE18F05F003', 'student3@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(22, 'student4', 'BE18F05F004', 'student4@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(23, 'student5', 'BE18F05F005', 'student5@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(24, 'student6', 'BE18F05F006', 'student6@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(25, 'student7', 'BE18F05F007', 'student7@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(26, 'student8', 'BE18F05F008', 'student8@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(27, 'student9', 'BE18F05F008', 'student9@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(28, 'student10', 'BE18F05F010', 'student10@student.com', 5, 'CS3002:Operating System', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(34, 'student6', 'BE18F05F006', 'student6@student.com', 5, 'CS3003:Theory of Computation', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(35, 'student7', 'BE18F05F007', 'student7@student.com', 5, 'CS3003:Theory of Computation', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(36, 'student8', 'BE18F05F008', 'student8@student.com', 5, 'CS3003:Theory of Computation', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(37, 'student9', 'BE18F05F009', 'student9@student.com', 5, 'CS3003:Theory of Computation', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq'),
(38, 'student10', 'BE18F05F010', 'student10@student.com', 5, 'CS3003:Theory of Computation', '$2y$10$NxfD8ECNFVA1u84FZ.EcNeYzxVZIUy9k5DBdlGHzoIcuxjaUbCYsq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lectures`
--
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`lecture_id`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `lectures`
--
ALTER TABLE `lectures`
  MODIFY `lecture_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
