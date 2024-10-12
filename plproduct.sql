-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for pertamina_lubricant
CREATE DATABASE IF NOT EXISTS `pertamina_lubricant` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pertamina_lubricant`;

-- Dumping structure for table pertamina_lubricant.excess
CREATE TABLE IF NOT EXISTS `excess` (
  `id` int DEFAULT NULL,
  `content` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.excess: ~6 rows (approximately)
INSERT INTO `excess` (`id`, `content`) VALUES
	(1, 'Akselerasi dan Power yang maksimal'),
	(5, 'Mesin Lebih tahan lama'),
	(3, 'Penggunaan pelumas lebih efisien'),
	(4, 'Teknologi NanoGuard'),
	(2, 'Perlindungan maksimum');

-- Dumping structure for table pertamina_lubricant.price
CREATE TABLE IF NOT EXISTS `price` (
  `id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.price: ~17 rows (approximately)
INSERT INTO `price` (`id`, `product_id`, `amount`, `price`) VALUES
	(1, 1, 4, 1344000),
	(2, 1, 1, 328500),
	(3, 2, 4, 898500),
	(4, 2, 1, 218500),
	(5, 3, 4, 492000),
	(6, 3, 1, 128000),
	(7, 4, 4, 571500),
	(8, 4, 1, 148500),
	(9, 5, 4, 557500),
	(10, 5, 1, 143500),
	(11, 6, 4, 377500),
	(12, 6, 1, 97500),
	(13, 7, 1, 90500),
	(14, 7, 4, 352500),
	(15, 8, 4, 284500),
	(16, 8, 1, 73000),
	(17, 9, 3.5, 278000),
	(18, 10, 3.5, 261500),
	(19, 11, 4, 316500),
	(20, 11, 1, 90000);

-- Dumping structure for table pertamina_lubricant.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int DEFAULT NULL,
  `v_type_id` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `consistency` varchar(255) DEFAULT NULL,
  `base_oil` varchar(255) DEFAULT NULL,
  `spesification` varchar(255) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `product_type_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.product: ~11 rows (approximately)
INSERT INTO `product` (`id`, `v_type_id`, `description`, `consistency`, `base_oil`, `spesification`, `image`, `product_type_id`) VALUES
	(1, 1, 'Siap untuk merasakan pengalaman "siap balapan"? Pelumas Platinum Racing dirancang dan diformulasikan khusus untuk pengguna mobil balap dengan spesifikasi teknis terbaik dunia dan menawarkan performa siap balapan dimanapun anda berada!', '10W-60', 'Fully Synthetic', '10W-60 SN/LAMBO', 'Fastron Platinum Racing 4L_no_lam.png', 1),
	(2, 1, 'Pelumas yang dirancang khusus untuk mobil yang menawarkan performa terbaik dengan teknologi mesin tercanggih dan didukung dengan spesifikasi terbaik dunia.', '0W-40', 'Fully Synthetic', '0W-40 SN/CF ACEA', 'Fastron Platinum 4L_no_lam.png', 2),
	(3, 1, 'Untuk pengemudi yang berorientasi pada karir, Fastron Gold dibuat untuk mendukung pengguna mobil premium. Menawarkan kinerja tertinggi dan nilai terbaik bagi pengguna dan didukung tekinikal terbaik dunia', '0W-20', 'Synthetic', '0W-20 SN/GF-5', 'Fastron Gold 0W-20 4L_no_lam.png', 3),
	(4, 1, 'Untuk pengemudi yang berorientasi pada karir, Fastron Gold dibuat untuk mendukung pengguna mobil premium. Menawarkan kinerja tertinggi dan nilai terbaik bagi pengguna dan didukung tekinikal terbaik dunia.', '5W-30', 'Synthetic', '5W-30 SN/CF ACEA', 'Fastron Gold 5W-30 4L_no_lam.png', 3),
	(5, 1, 'Untuk pengemudi yang berorientasi pada karir, Fastron Gold dibuat untuk mendukung pengguna mobil premium. Menawarkan kinerja tertinggi dan nilai terbaik bagi pengguna dan didukung tekinikal terbaik dunia.', '5W-40', 'Synthetic', '5W-40 SN/CF ACEA', 'Fastron Gold 5W-40 4L_no_lam.png', 3),
	(6, 1, 'Untuk pengendara yang mengejar value, Fastron Techno adalah pelumas dengan teknologi perlindungan terbaik dunia untuk menjaga mesin tetap bersih dan dingin, memberikan "more for less" bagi pengguna.', '10W-30', 'Synthetic', '10W-30 API SN/GF5', 'Fastron Techno 10W-30 4L_no_lam.png', 4),
	(7, 1, 'Untuk pengendara yang mengejar value, Fastron Techno adalah pelumas dengan teknologi perlindungan terbaik dunia untuk menjaga mesin tetap bersih dan dingin, memberikan "more for less" bagi pengguna.', '10W-40', 'Synthetic', '10W-40 API SN', 'Fastron Techno 10W-40 4L_no_lam.png', 4),
	(8, 1, 'Untuk pengendara yang mengejar value, Fastron Techno adalah pelumas dengan teknologi perlindungan terbaik dunia untuk menjaga mesin tetap bersih dan dingin, memberikan "more for less" bagi pengguna.', '15W-50', 'Synthetic', '15W-50 API SN', 'Fastron Techno 15W-50 4L_no_lam.png', 4),
	(9, 1, 'Dirancang khusus untuk mobil ramah lingkungan dengan harga terjangkau (LCGC) yang beroperasi dalam kondisi ekstrim dengan tingkat kebersihan tertinggi.', '0W-20', 'Synthetic', '0W-20 API SN', 'Fastron EcoGreen 0W-20 3.5L.png', 5),
	(10, 1, 'Dirancang khusus untuk mobil ramah lingkungan dengan harga terjangkau (LCGC) yang beroperasi dalam kondisi ekstrim dengan tingkat kebersihan tertinggi.', '5W-30', 'Synthetic', '5W-30 API SN', 'Fastron EcoGreen 5W-30 3.5L.png', 5),
	(11, 1, 'Pelumas yang dirancang khusus untuk mobil mesin diesel dengan desain modern yang menawarkan performa tinggi dan nilai terbaik "more for less" bagi penggunanya.', '15W-40', 'Synthetic', '15W-40 API CI-4', 'Fastron Diesel 4L.png', 6);

-- Dumping structure for table pertamina_lubricant.product_excess
CREATE TABLE IF NOT EXISTS `product_excess` (
  `id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `excess_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.product_excess: ~42 rows (approximately)
INSERT INTO `product_excess` (`id`, `product_id`, `excess_id`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 1, 4),
	(5, 2, 5),
	(6, 2, 2),
	(7, 2, 3),
	(8, 2, 4),
	(9, 3, 5),
	(10, 3, 2),
	(11, 3, 3),
	(12, 3, 4),
	(13, 4, 5),
	(14, 4, 2),
	(15, 4, 3),
	(16, 4, 4),
	(17, 5, 5),
	(18, 5, 2),
	(19, 5, 3),
	(20, 5, 4),
	(21, 6, 5),
	(22, 6, 2),
	(23, 6, 3),
	(24, 6, 4),
	(25, 7, 5),
	(26, 7, 2),
	(27, 7, 3),
	(28, 7, 4),
	(29, 8, 5),
	(30, 8, 2),
	(31, 8, 3),
	(32, 8, 4),
	(33, 9, 5),
	(34, 9, 2),
	(35, 9, 3),
	(36, 9, 4),
	(37, 10, 5),
	(38, 10, 2),
	(39, 10, 3),
	(40, 10, 4),
	(41, 11, 5),
	(42, 11, 2),
	(43, 11, 3),
	(44, 11, 4);

-- Dumping structure for table pertamina_lubricant.product_sell
CREATE TABLE IF NOT EXISTS `product_sell` (
  `id` varchar(50) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `is_sold` tinyint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.product_sell: ~33 rows (approximately)
INSERT INTO `product_sell` (`id`, `product_id`, `is_sold`) VALUES
	('dhfkahflkdsf982392', 1, 0),
	('dfafsdfdsaf24323', 1, 0),
	('ajlfjdsgnbdfa22432', 1, 1),
	('48702934oidsfh', 2, 1),
	('dgsg4323432', 2, 1),
	('dfgfshjklulm546', 2, 0),
	('32432432dvdvdv', 3, 1),
	('dfgdassd123', 3, 0),
	('3r234gdgd', 3, 1),
	('afkjafkd823', 4, 1),
	('jkfjkahf87', 4, 1),
	('234dgdgsdgd', 4, 0),
	('4325sgdfgsdg', 5, 0),
	('454tdfsgsdgds', 5, 0),
	('gdsdfgdfgdf', 5, 0),
	('tdgsdfgs235', 6, 0),
	('fdahdfjg', 6, 0),
	('sfgsgdfhsh', 6, 0),
	('fgsdfg4t64', 7, 0),
	('fsjhjjhrtsy5y', 7, 0),
	('hdhrtyrty63', 7, 0),
	('gfhsy346rsf', 8, 0),
	('dghdfhre634', 8, 0),
	('sgtyrettre3453', 8, 0),
	('hiotryerjoi', 9, 0),
	('dghjkjlrey', 9, 0),
	('jklhjkdghlkj', 9, 0),
	('sgatret3tffsd', 10, 1),
	('dasjfhjkaff', 10, 1),
	('asdkljghljkbg', 10, 1),
	('asdfjhkjfhkf', 11, 0),
	('fhikhkjrehs', 11, 0),
	('adfahlkfhg', 11, 0);

-- Dumping structure for table pertamina_lubricant.product_type
CREATE TABLE IF NOT EXISTS `product_type` (
  `id` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.product_type: ~6 rows (approximately)
INSERT INTO `product_type` (`id`, `name`, `img`) VALUES
	(1, 'Fastron Platinum Racing', '46e07-fastron-platinum-racing.png'),
	(2, 'Fastron Platinum', 'b862b-fastron-platinum.png'),
	(3, 'Fastron Gold', '1f4cd-fastron-gold.png'),
	(4, 'Fastron Techno', 'ccff3-fastron-techno.png'),
	(5, 'Fastron Eco Green', 'e16d0-fastron-eco-green.png'),
	(6, 'Fastron Diesel', '86fd0-fastron-diesel.png');

-- Dumping structure for table pertamina_lubricant.product_utility
CREATE TABLE IF NOT EXISTS `product_utility` (
  `id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `utility_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.product_utility: ~30 rows (approximately)
INSERT INTO `product_utility` (`id`, `product_id`, `utility_id`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 2, 3),
	(4, 3, 4),
	(5, 4, 4),
	(6, 5, 4),
	(7, 6, 5),
	(8, 6, 6),
	(9, 6, 7),
	(10, 6, 8),
	(11, 7, 5),
	(12, 7, 6),
	(13, 7, 7),
	(14, 7, 8),
	(15, 8, 5),
	(16, 8, 6),
	(17, 8, 7),
	(18, 8, 8),
	(19, 9, 9),
	(20, 9, 10),
	(21, 9, 11),
	(22, 9, 12),
	(23, 9, 13),
	(24, 10, 9),
	(25, 10, 10),
	(26, 10, 11),
	(27, 10, 12),
	(28, 10, 13),
	(29, 11, 5),
	(30, 11, 6);

-- Dumping structure for table pertamina_lubricant.utility
CREATE TABLE IF NOT EXISTS `utility` (
  `id` int DEFAULT NULL,
  `content` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.utility: ~13 rows (approximately)
INSERT INTO `utility` (`id`, `content`) VALUES
	(1, 'Mobil Sport'),
	(2, 'Performance cars'),
	(3, 'Luxury Cars'),
	(4, 'Premium Cars'),
	(5, 'SUV'),
	(6, 'MPV'),
	(7, 'Sedan'),
	(8, 'Hatchback'),
	(9, 'Ayla'),
	(10, 'Agya'),
	(11, 'Cayla'),
	(12, 'Sigra'),
	(13, 'Brio');

-- Dumping structure for table pertamina_lubricant.v_type
CREATE TABLE IF NOT EXISTS `v_type` (
  `id` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pertamina_lubricant.v_type: ~3 rows (approximately)
INSERT INTO `v_type` (`id`, `name`) VALUES
	(1, 'Mobil'),
	(2, 'Motor'),
	(3, 'Truk/Bus'),
	(4, 'Spesialties');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
