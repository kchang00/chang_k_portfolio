-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Nov 19, 2020 at 06:52 PM
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
  `Video` text NOT NULL,
  `ProcessTitle` varchar(60) NOT NULL,
  `ProcessSubtitle` varchar(60) NOT NULL,
  `ProcessDescription` text NOT NULL,
  `ProcessImgs` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_p_info`
--

INSERT INTO `tbl_p_info` (`ID`, `Title`, `Subtitle`, `Description`, `Medium`, `Category`, `Deliverables`, `Team`, `Year`, `Imgs`, `ProjectURL`, `Video`, `ProcessTitle`, `ProcessSubtitle`, `ProcessDescription`, `ProcessImgs`) VALUES
(1, 'Keep It Neutral', 'Marketing Campaign for the Regional HIV/AIDS Connection.', 'We had the privilege of partnering with the Regional HIV/AIDS Connection (RHAC), an organization dedicated to positively impacting the lives of individuals and diverse communities affected by HIV/AIDS. Enter Keep It Neutral — a campaign targeted towards educating and empowering young people in London, Ontario. Keep It Neutral envisions a world where HIV is no longer transmittable or stigmatized. We strive to have open, healthy, and thoughtful conversations surrounding HIV and AIDS.', 'Branding/Video', '', 'Branding, Marketing Strategy, Videos, Animation, Website', 'Kayla Chang, Kahani Gajjar, Mariam Khalifa, Sandra Tsao, Luisa Valero', '2020', 'neutral1.jpg, neutral2.jpg, neutral3.jpg, neutral4.png', '', 'https://www.youtube.com/embed/0daK288h2BQ?rel=0&enablejsapi=1, https://www.youtube.com/embed/sRWW1VpWDzA?rel=0&enablejsapi=1, https://www.youtube.com/embed/Z1WvKQ3-Gao?rel=0&enablejsapi=1', 'Coming Soon!', 'Video Process, Brainstorming, and More', 'Below are some progress shots of the logo animation and how it has evolved over the course of the project. We\'re actually in the middle of completing our  pitch as we speak. Hopefully you\'ll come back to see the progress we\'ve made.', 'neutral_process1.gif, neutral_process2.gif, neutral_process3.gif'),
(2, 'Ontario Summer', '24 Hours to Find Yourself at Home.', 'In 24 short hours, our team was challenged to create a marketing campaign pitch for Ontario Summer, a tourism season between June and August. The goal: To increase annual non-resident visitation to Ontario and promote travel during the summer months. ', 'Branding/Video', '', 'Branding, Website, Video', 'Kayla Chang, Kahani Gajjar, Mariam Khalifa, Sandra Tsao, Luisa Valero', '2020', 'ontario_summer1.svg', '', 'https://www.youtube.com/embed/OoddyCwTHgI?rel=0&enablejsapi=1', 'Process', 'Branding Visuals and Video Workflow', 'The concept of the video can be summed up as, \"The perfect summer day in Ontario\". My creative direction was largely led by the keywords represented in the logo: an experience of connection, comfort, and fun. After researching key components of Ontario culture, activities, and regions, I began compiling assets. From the visuals, I planned the sequence of scenes, made a script, cut together the footage and compiled everything together. Tourists and their loved ones will find that they belong in Ontario Summer.', 'ontario_summer2.svg, ontario_summer3.svg, ontario_summer4.svg, ontario_summer6.png, ontario_summer7.gif, ontario_summer5.gif'),
(3, 'Shopon', 'Making an online furniture ad.', 'The objective of this project was to create an animated commercial with 3D models that morph into frame. My concept portrays an imaginary online furniture store, where the large variety and online medium makes it easy for consumers to shop for whatever they want, wherever they want. With the online products and services, the character in the ad is able to make furniture appear at will. Made using Cinema4D, Mixamo, and After Effects.', 'Animation', 'Marketing', 'Visual Design, Creative Direction, Animation, Video Editing\r\n', 'Kayla Chang', '2019', 'morphing_frame.jpg, morphing_frame2.jpg, morphing_frame3.jpg, morphing_frame4.jpg, morphing_frame5.jpg', '', 'https://www.youtube.com/embed/YLCKrRU9gYU?rel=0&enablejsapi=1', '', '', '', ''),
(4, 'ReMade', 'A marketing campaign for organ transplantation.', 'We were challenged to bring awareness to  the transplantation of laboratory organs. More specifically, the revolutionary recellularization process developed by Harald Ott and his researchers at Harvard Medical. It was crucial that we explain the organ regeneration process, the benefits, and why it should become a part of mainstream medicine. Our solution was a three part marketing outreach strategy, complete with branding, a video, and a brochure to establish a fictional web presence to target investors.\r\n\r\n', 'Branding/Video', 'Marketing', 'Branding, Website, Video, Brochure', 'Kayla Chang, Mariam Khalifa, Luisa Valero', '2019', 'organs_remade_logo.svg, organs_remade_apple_devices.jpg, organs_remade_trifold_brochure_mockup.jpg, organs_remade_outside_brochure_mockup.jpg, organs_remade_inside_brochure_mockup.jpg', '', 'https://www.youtube.com/embed/RpdePQsD8Is?rel=0&enablejsapi=1', '', '', '', ''),
(5, 'Sportsnet', 'A video intro for a sports network.', 'As an end of term project, we were asked to create a video intro that could be used for a sports network. All the modelling, texturing, and animation was done by myself in Cinema4D. I edited the video in Premier Pro and After Effects.', 'Animation', 'Sports', 'Creative Direction, Video Editing', 'Kayla Chang', '2019', 'sportsnet_frame3.jpg,\r\nsportsnet_frame1.jpg,\r\nsportsnet_frame2.jpg,\r\nsportsnet_frame4.jpg, sportsnet_frame5.jpg ', '', 'https://www.youtube.com/embed/WxWxkg0Okvc?rel=0&enablejsapi=1', '', '', '', ''),
(6, 'Digital Lights', 'Branding for an imaginary advertising agency.', 'We were tasked with branding ourselves as if we were an agency. After brainstorming, Digital Lights was born. Their mission statement is as follows: \"We are a group of passionate creatives who are committed to bringing a special shine to all of our work. As a full-service advertising agency, we target local businesses and organizations to highlight their brand, products, and services to solve problems and spark innovation. We believe that big or small, each creative solution will collectively form a bigger, brighter community.\"', 'Website/Video', 'Branding', 'Logo, Website, Video', 'Kayla Chang, Lân Lê, Julia Kandych, Vira Romanko', '2019', 'digital_lights_kayla.jpg, digital_lights_lan.jpg, digital_lights_julia.jpg, digital_lights_vira.jpg,\r\ndigital_lights_devices.jpg', '', 'https://www.youtube.com/embed/Q7Y3nqdh-Ss?rel=0&enablejsapi=1', '', '', '', ''),
(7, 'Ivey History', 'Creating Ivey\'s virtual history site.', 'The Learning to Lead: History of the Ivey Business School site is a collection of historic archives based on the second edition of Learning to Lead, which highlights the development of Ivey Business School. I was tasked with designing and populating the site via the Umbraco CMS, including the landing page video. Visitors can scroll through detailed records of now digitized archives, or submit their own records to the School.', 'Website/Content', 'Education', 'Website, Video', 'Kayla Chang', '2019', 'ivey_history_bg.jpg', 'https://www.ivey.uwo.ca/about/history/virtual-history/', 'https://www.youtube.com/embed/QuKKtjukPg0?rel=0&enablejsapi=1', '', '', '', ''),
(8, 'Discover Ivey', 'Revamping the Discover Ivey site.', 'The Discover Ivey site handles branded stories for the Ivey Business School at Western University. I was asked to revamp the site to give it a fresh look and feel. The site\'s design reinforces Ivey\'s innovation and forward thinking.', 'Website', 'Education', 'Website Design', 'Kayla Chang', '2019', 'ivey_discover_mobile_mockup.jpg, ivey_discover_tablet_mockup.jpg, ivey_discover_desktop_mockup.jpg', '', '', '', '', '', ''),
(9, 'TRAA', 'New website for the TRAA.', 'The TRAA is a “hands on” environmental organization that works with the surrounding communities to advocate for the health of the Thames River watershed and its inhabitants. We were asked to remake their site to improve brand coherence and site functionality. Site launch is coming soon!\r\n\r\nThe primary objectives of the site are to educate the public about the TRAA and get new members. We hope the site will be used by current TRAA members and fish enthusiasts alike to get information on the TRAA, look at upcoming events, become a member, donate, and look at the results of efforts.', 'Website', 'Lifestyle', 'UX, Branding, Website, Video', 'Kayla Chang, Mariam Khalifa', '2018', 'traa_mobile_mockups.jpg, traa_desktop_tablet_mockups.jpg', '', 'https://www.youtube.com/embed/oForjCxs_9A?rel=0&enablejsapi=1, https://www.youtube.com/embed/ZP_D_ODfYDg?rel=0&enablejsapi=1,https://www.youtube.com/embed/bDPViDIiOlc?rel=0&enablejsapi=1', '', '', '', ''),
(10, 'Animal Tracks', 'Making a music mixer for kids.', 'We were asked to make a game where you could take different sounds and put them together to make a song. Our solution was Animal Tracks - a game for kids to drag and drop different animal sounds to make your own beat, accompanied by different background tracks. All graphics (characters, environments, icons) were created by me. Animated entirely with CSS3 and SVG animations.', 'Website', 'Music', 'Creative Direction, Character Design, Animation, Audio, Website', 'Kayla Chang, Mariam Khalifa', '2018', 'mixer_tiger.svg, mixer_horse.svg, mixer_dog.svg, mixer_bird.svg, mixer_together.jpg, mixer_enviro1.svg, mixer_enviro2.svg, mixer_enviro3.svg, mixer_enviro4.svg', 'https://github.com/kchang00/chang_k_khalifa_m_musicMixer.git', '', 'Process', 'Sketches, Paper Prototypes, and Pantones', 'Early character sketches and paper prototypes of the UI.', 'mixer_process1.jpg, mixer_process2.jpg, mixer_process3.jpg'),
(11, '2019 Demo Reel', 'A compilation of some of my past works.', 'Some of videos and animations I have worked on in the past year. I work primarily using the Adobe Creative Suite (After Effects, Premiere Pro, Illustrator, Photoshop, Indesign, XD, etc.) But you\'ll also see a few 3D animations in Cinema4D. Most of the projects are covered in more detail in the rest of my portfolio!', 'Animation', '', 'Video, Styleframes', 'Kayla Chang', '2019', 'demo1.jpg', '', 'https://www.youtube.com/embed/n5M55_KDjlg?rel=0&enablejsapi=1', 'Process', 'Styleframes', 'Before starting a project, I usually make a few styleframes to define the look and feel of the video. Created in Photoshop and After Effects.', 'demo1.jpg, demo2.jpg, demo3.jpg, demo4.jpg, demo5.jpg   ');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
