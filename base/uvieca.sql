-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2022 a las 05:05:39
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `uvieca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` bigint(20) NOT NULL,
  `act_economica` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_instalacion` int(11) NOT NULL,
  `nit` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `nrc` varchar(255) DEFAULT NULL,
  `razon_social` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `constitucion_empresa` bigint(20) DEFAULT NULL,
  `copia_nit_id` bigint(20) DEFAULT NULL,
  `copia_ncr_id` bigint(20) DEFAULT NULL,
  `cons_empresa` bigint(20) DEFAULT NULL,
  `nitid` bigint(20) DEFAULT NULL,
  `nrcid` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `act_economica`, `email`, `id_instalacion`, `nit`, `nombre`, `nrc`, `razon_social`, `telefono`, `constitucion_empresa`, `copia_nit_id`, `copia_ncr_id`, `cons_empresa`, `nitid`, `nrcid`) VALUES
(0, 'prueba', 'prueba', 0, 'prueba', 'Carlos Trigueros', 'prueba', 'prueba', 'prueba', 0, 0, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `constituciones_emp`
--

CREATE TABLE `constituciones_emp` (
  `id` bigint(20) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `constituciones_emp`
--

INSERT INTO `constituciones_emp` (`id`, `img`) VALUES
(0, 'value_a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `copiasdui`
--

CREATE TABLE `copiasdui` (
  `id` bigint(20) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `copiasncr`
--

CREATE TABLE `copiasncr` (
  `id` bigint(20) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `copiasncr`
--

INSERT INTO `copiasncr` (`id`, `img`) VALUES
(0, 'value_a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `copiasnit`
--

CREATE TABLE `copiasnit` (
  `id` bigint(20) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `copiasnit`
--

INSERT INTO `copiasnit` (`id`, `img`) VALUES
(0, 'value_a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `copias_carnet`
--

CREATE TABLE `copias_carnet` (
  `id` bigint(20) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `electricistas`
--

CREATE TABLE `electricistas` (
  `id` bigint(20) NOT NULL,
  `carnet` int(11) NOT NULL,
  `dui` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nit` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `registro` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `copia_carnet` bigint(20) DEFAULT NULL,
  `copia_dui` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inspeccion`
--

CREATE TABLE `inspeccion` (
  `id` bigint(20) NOT NULL,
  `inspeccionid` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instalaciones`
--

CREATE TABLE `instalaciones` (
  `id` bigint(20) NOT NULL,
  `capacidad_de_la_subestacion` int(11) NOT NULL,
  `capacidad_del_generador` int(11) NOT NULL,
  `carga_a_solicitar` int(11) NOT NULL,
  `clasificacion_de_la_instalacion` varchar(255) DEFAULT NULL,
  `conexion_de_la_subestacion` varchar(255) DEFAULT NULL,
  `departamentoid` int(11) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `municipioid` int(11) NOT NULL,
  `nombre_pro` varchar(255) DEFAULT NULL,
  `nro_de_hojas` int(11) NOT NULL,
  `nro_de_niveles` int(11) NOT NULL,
  `nro_de_servicio_a_instalar` int(11) NOT NULL,
  `nro_de_trasformadores` int(11) NOT NULL,
  `nro_tablero` int(11) NOT NULL,
  `tension_del_suministro` int(11) NOT NULL,
  `tipo_de_servicio` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud_model`
--

CREATE TABLE `solicitud_model` (
  `id` bigint(20) NOT NULL,
  `cliente_id` bigint(20) NOT NULL,
  `electricista_id` bigint(20) NOT NULL,
  `solicitud_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5265gl9b9deac2nje5ee075t8` (`constitucion_empresa`),
  ADD KEY `FKr1ey3dycvf9lxb4efv27rksm5` (`copia_nit_id`),
  ADD KEY `FK7t7a0noox471jun8fcp0hh63g` (`copia_ncr_id`),
  ADD KEY `FKdsdag3fk95u1e505i8cxqvnf` (`cons_empresa`),
  ADD KEY `FKd5lwea1mnpgkk5ws49yubaaqn` (`nitid`),
  ADD KEY `FKtbm5h932dj80kkypeny351n3e` (`nrcid`);

--
-- Indices de la tabla `constituciones_emp`
--
ALTER TABLE `constituciones_emp`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `copiasdui`
--
ALTER TABLE `copiasdui`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `copiasncr`
--
ALTER TABLE `copiasncr`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `copiasnit`
--
ALTER TABLE `copiasnit`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `copias_carnet`
--
ALTER TABLE `copias_carnet`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `electricistas`
--
ALTER TABLE `electricistas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcr2n3jo7sxcknx3u21bhj5cst` (`copia_carnet`),
  ADD KEY `FKfg9529684wruljuj4kj4nh1b0` (`copia_dui`);

--
-- Indices de la tabla `inspeccion`
--
ALTER TABLE `inspeccion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrxbxtrwxx9o59e0bwx7qthqtm` (`inspeccionid`);

--
-- Indices de la tabla `instalaciones`
--
ALTER TABLE `instalaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `solicitud_model`
--
ALTER TABLE `solicitud_model`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdd06o3fst7vrtxvj4l0epfyr2` (`cliente_id`),
  ADD KEY `FKs3n865qjshg12eue4xt60wyyd` (`electricista_id`),
  ADD KEY `FKiibdq0445qs1sp7ah4eoiigx6` (`solicitud_id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `FK5265gl9b9deac2nje5ee075t8` FOREIGN KEY (`constitucion_empresa`) REFERENCES `constituciones_emp` (`id`),
  ADD CONSTRAINT `FK7t7a0noox471jun8fcp0hh63g` FOREIGN KEY (`copia_ncr_id`) REFERENCES `copiasncr` (`id`),
  ADD CONSTRAINT `FKd5lwea1mnpgkk5ws49yubaaqn` FOREIGN KEY (`nitid`) REFERENCES `copiasnit` (`id`),
  ADD CONSTRAINT `FKdsdag3fk95u1e505i8cxqvnf` FOREIGN KEY (`cons_empresa`) REFERENCES `constituciones_emp` (`id`),
  ADD CONSTRAINT `FKr1ey3dycvf9lxb4efv27rksm5` FOREIGN KEY (`copia_nit_id`) REFERENCES `copiasnit` (`id`),
  ADD CONSTRAINT `FKtbm5h932dj80kkypeny351n3e` FOREIGN KEY (`nrcid`) REFERENCES `copiasncr` (`id`);

--
-- Filtros para la tabla `electricistas`
--
ALTER TABLE `electricistas`
  ADD CONSTRAINT `FKcr2n3jo7sxcknx3u21bhj5cst` FOREIGN KEY (`copia_carnet`) REFERENCES `copias_carnet` (`id`),
  ADD CONSTRAINT `FKfg9529684wruljuj4kj4nh1b0` FOREIGN KEY (`copia_dui`) REFERENCES `copiasdui` (`id`);

--
-- Filtros para la tabla `inspeccion`
--
ALTER TABLE `inspeccion`
  ADD CONSTRAINT `FKrxbxtrwxx9o59e0bwx7qthqtm` FOREIGN KEY (`inspeccionid`) REFERENCES `instalaciones` (`id`);

--
-- Filtros para la tabla `solicitud_model`
--
ALTER TABLE `solicitud_model`
  ADD CONSTRAINT `FKdd06o3fst7vrtxvj4l0epfyr2` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `FKiibdq0445qs1sp7ah4eoiigx6` FOREIGN KEY (`solicitud_id`) REFERENCES `instalaciones` (`id`),
  ADD CONSTRAINT `FKs3n865qjshg12eue4xt60wyyd` FOREIGN KEY (`electricista_id`) REFERENCES `electricistas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
