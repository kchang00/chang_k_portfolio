-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Dec 14, 2019 at 04:12 AM
-- Server version: 5.7.28
-- PHP Version: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
  `Imgs` text NOT NULL,
  `ProjectURL` text NOT NULL,
  `Video` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_p_info`
--

INSERT INTO `tbl_p_info` (`ID`, `Title`, `Subtitle`, `Description`, `Medium`, `Category`, `Deliverables`, `Team`, `Year`, `Imgs`, `ProjectURL`, `Video`) VALUES
(1, 'Shopon', 'Making an online furniture ad.', 'For this project, I was told to create an animated commercial with 3D models that morph into frame. I came up with the concept of an imaginary online furniture store. The message I wanted to convey was that the large variety and online medium makes it easy for consumers to shop for whatever they want, wherever they want. With the online products and services, the character in the ad is able to make furniture appear at will.\r\n\r\nMade using Cinema4D, Mixamo, and After Effects.', 'Animation', 'Marketing', 'Visual Design, Creative Direction, Animation, Video Editing\r\n', 'Kayla Chang', '2019', 'morphing_frame.jpg, morphing_frame2.jpg, morphing_frame3.jpg, morphing_frame4.jpg, morphing_frame5.jpg', '', 'https://www.youtube.com/embed/YLCKrRU9gYU'),
(2, 'ReMade', 'A marketing campaign for organ transplantation.', 'We were challenged to bring awareness to  the transplantation of laboratory organs. More specifically, the revolutionary recellularization process developed by Harald Ott and his researchers at Harvard Medical. It was crucial that we explain the organ regeneration process, the benefits, and why it should become a part of mainstream medicine. Our solution was a three part marketing outreach strategy, complete with branding, a video, and a brochure to establish a fictional web presence to target investors.\r\n\r\n', 'Branding/Video', 'Marketing', 'Branding, Website, Video, Brochure', 'Mariam Khalifa, Luisa Valero', '2019', 'organs_remade_apple_devices.jpg, organs_remade_trifold_brochure_mockup.jpg, organs_remade_outside_brochure_mockup.jpg, organs_remade_inside_brochure_mockup.jpg', '', 'https://www.youtube.com/embed/RpdePQsD8Is'),
(3, 'Digital Lights', 'Branding for an imaginary advertising agency.', 'We were tasked with branding ourselves as if we were an agency. After brainstorming, Digital Lights was born. Their mission statement is as follows: \"We are a group of passionate creatives who are committed to bringing a special shine to all of our work. As a full-service advertising agency, we target local businesses and organizations to highlight their brand, products, and services to solve problems and spark innovation. We believe that big or small, each creative solution will collectively form a bigger, brighter community.\"', 'Website/Video', 'Branding', 'Logo, Website, Video', 'Lân Lê, Julia Kandych, Vira Romanko', '2019', 'digital_lights_kayla.jpg, digital_lights_lan.jpg, digital_lights_julia.jpg, digital_lights_vira.jpg', '', 'https://www.youtube.com/embed/Q7Y3nqdh-Ss'),
(4, 'Sportsnet', 'A video intro for a sports network.', 'As an end of term project, we were asked to create a video intro that could be used for a sports network. All the modelling, texturing, and animation was done by myself in Cinema4D. I edited the video in Premier Pro and After Effects.', 'Animation', 'Sports', 'Creative Direction, Video Editing', 'Kayla Chang', '2019', 'sportsnet_frame1.jpg, sportsnet_frame2.jpg, sportsnet_frame3.jpg, sportsnet_frame4.jpg, sportsnet_frame5.jpg ', '', 'https://www.youtube.com/embed/WxWxkg0Okvc'),
(5, 'TRAA', 'New website for the TRAA.', 'The TRAA is a “hands on” environmental organization that works with the surrounding communities to advocate for the health of the Thames River watershed and its inhabitants. We were asked to remake their site to improve brand coherence and site functionality. Site launch is coming soon!\r\n\r\nThe primary objectives of the site are to educate the public about the TRAA and get new members. We hope the site will be used by current TRAA members and fish enthusiasts alike to get information on the TRAA, look at upcoming events, become a member, donate, and look at the results of efforts.', 'Website', 'Lifestyle', 'UX, Branding, Website, Video', 'Mariam Khalifa', '2018', 'traa_mobile_mockups.jpg, traa_desktop_tablet_mockups.jpg', '', 'https://www.youtube.com/embed/oForjCxs_9A, https://www.youtube.com/embed/ZP_D_ODfYDg,https://www.youtube.com/embed/bDPViDIiOlc'),
(6, 'Animal Tracks', 'Making a music mixer for kids.', 'We were asked to make a game where you could take different sounds and put them together to make a song. Our solution was Animal Tracks - a game for kids to drag and drop different animal sounds to make your own beat, accompanied by different background tracks. All graphics (characters, environments, icons) were created by me. Animated entirely with CSS3 and SVG animations.', 'Website', 'Music', 'Creative Direction, Character Design, Animation, Audio, Website', 'Mariam Khalifa', '2018', 'mixer_group_v2.svg, mixer_enviro1.svg, mixer_enviro2.svg, mixer_enviro3.svg, mixer_enviro4.svg', 'https://github.com/kchang00/chang_k_khalifa_m_musicMixer.git', ''),
(7, 'Ivey History', 'Creating Ivey\'s virtual history site.', 'The Learning to Lead: History of the Ivey Business School site is a collection of historic archives based on the second edition of Learning to Lead, which highlights the development of Ivey Business School. I was tasked with designing and populating the site via the Umbraco CMS, including the landing page video. Visitors can scroll through detailed records of now digitized archives, or submit their own records to the School.', 'Website/Content', 'Education', 'Website, Video', 'Kayla Chang', '2019', 'ivey_history_bg.jpg', 'https://www.ivey.uwo.ca/about/history/virtual-history/', ''),
(8, 'Discover Ivey', 'Revamping the Discover Ivey site.', 'The Discover Ivey site handles branded stories for the Ivey Business School at Western University. I was asked to revamp the site to give it a fresh look and feel. The site\'s design reinforces Ivey\'s innovation and forward thinking.', 'Website', 'Education', 'Website', 'Kayla Chang', '2019', 'ivey_discover_mobile_mockup.jpg, ivey_discover_tablet_mockup.jpg, ivey_discover_desktop_mockup.jpg', '', '');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
