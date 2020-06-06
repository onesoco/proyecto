-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2020 a las 13:49:39
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `php_login_system`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `active` int(11) NOT NULL COMMENT '0=no,1=si',
  `destacado` int(11) NOT NULL COMMENT '0=no,1=si',
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `title`, `description`, `active`, `destacado`, `created`, `modified`) VALUES
(126, 'valorant', 'Valorant', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisl ut convallis convallis. Mauris convallis dapibus ex, sit amet porttitor nisi sodales in. Maecenas dictum pellentesque iaculis. In hac habitasse platea dictumst. Cras sagittis feugiat metus at cursus. Sed condimentum efficitur commodo. Donec porttitor, nunc eu fringilla consequat, diam erat auctor leo, id varius mi tellus ac nisl.', 1, 1, '2020-05-21 17:27:17', '2020-05-21 15:27:25'),
(129, 'justchatting', 'Just chatting', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus mauris quis est dapibus, vitae feugiat urna euismod. Mauris a ex.', 1, 0, '2020-05-21 17:32:40', '2020-05-22 18:19:53'),
(152, 'dofustoutch', 'Dofus Toutch', '', 1, 0, '2020-05-22 23:12:31', '2020-05-22 21:12:31'),
(153, 'lol', 'League of legends', '', 0, 0, '2020-05-22 23:13:38', '2020-06-05 13:38:58'),
(154, 'gtav', 'GTA V', 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.', 1, 1, '2020-05-22 23:14:03', '2020-05-22 21:40:14'),
(408, 'csgo', 'csgo', 'csgo', 1, 1, '2020-06-06 13:39:25', '2020-06-06 11:39:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `contact_number` varchar(64) NOT NULL,
  `password` varchar(512) NOT NULL,
  `access_level` varchar(16) NOT NULL,
  `access_code` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='admin y moderadores';

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `contact_number`, `password`, `access_level`, `access_code`, `created`, `modified`) VALUES
(1, 'Antonio', 'García Llabrés', 'agarcial@cifpfbmoll.eu', '', '$2y$10$oIMFKlk0dkGa.bEyASf8KeFMgeg4fDhZIRK7iGy7Y4CNw1t6zV24K', 'Admin', '1', '2020-05-08 15:17:00', '2020-06-06 08:31:22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=410;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
