-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 03, 2019 at 08:27 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio_u`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_p_info`
--

CREATE TABLE `tbl_p_info` (
  `ID` int(11) NOT NULL,
  `Title` varchar(60) NOT NULL,
  `Subtitle` varchar(60) NOT NULL,
  `Description` text NOT NULL,
  `Medium` varchar(60) NOT NULL,
  `Category` varchar(60) NOT NULL,
  `Deliverables` varchar(100) NOT NULL,
  `Team` varchar(100) NOT NULL,
  `Year` varchar(100) NOT NULL,
  `Imgs` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_p_info`
--

INSERT INTO `tbl_p_info` (`ID`, `Title`, `Subtitle`, `Description`, `Medium`, `Category`, `Deliverables`, `Team`, `Year`, `Imgs`) VALUES
(1, 'Traditional Animation', 'Traditional animation subtitle.', 'Traditional animation, sometimes referred to as cel animation, is one of the older forms of animation, in it the animator draws every frame to create the animation sequence. Just like they used to do in the old days of Disney. If you’ve ever had one of those flip-books when you were a kid, you’ll know what I mean. Sequential drawings screened quickly one after another create the illusion of movement.', 'Website', 'Lifestyle', 'TVPaint, Toon Boom Harmony, Photoshop', 'Mariam Khalifa', '2018', 'botw.jpg, howl.jpg, rotoscope.jpg'),
(2, '3D Animation', '3d animation subtitle', '3D animation works in a completely different way than traditional animation. They both require an understanding of the same principles of movement and composition, but the technical skill set is very different for each task. While traditional animation requires you to be an amazing draftsman, computer animation doesn’t. 3D animation is more similar to playing with puppets rather than drawing.\r\n', 'Mobile App', 'Music', 'Autodesk Maya, Autodesk 3DS Max, Cinema 4D, Blender', 'Sandra Tsao', '2013', 'rotoscope.jpg, botw.jpg'),
(3, 'Motion Graphics', 'motion graphics subtitle', 'While still considered a form of animation, motion graphics is quite different from the other types of animation. Unlike the other types on our list it is not character or story driven. It’s the art of creatively moving graphic elements or texts, usually for commercial or promotional purposes.', 'VR app', 'Food', 'Adobe After Effects, Cinema 4D', 'Kahani Gajjar', '2014', 'howl.jpg, botw.jpg'),
(4, 'Rotoscoping Animation', 'rotoscoping subtitle', 'Rotoscoping is defined as an animation technique through which animators trace over footage within a software program using a rotoscoping tool. This technique goes back to the early days of cinema when animators used to project photographed live-action movie images onto a glass panel and trace over the image.\r\n\r\nThat projection equipment was called a rotoscope. As modern animation progressed into the 21st century this device was eventually replaced by computers. Anyways, the process is still called rotoscoping.', 'Website', 'Music', 'Adobe After Effects, Blender, Autodesk, Silhouette', 'Luisa Valero, Mariam Khalifa', '2019', 'motion.jpg, botw.jpg, howl.jpg, rotoscope.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_p_info`
--
ALTER TABLE `tbl_p_info`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_p_info`
--
ALTER TABLE `tbl_p_info`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
