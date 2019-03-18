-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 18-03-2019 a las 08:50:10
-- Versión del servidor: 5.7.25-0ubuntu0.18.04.2
-- Versión de PHP: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `travel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `baño`
--

CREATE TABLE `baño` (
  `id` int(11) NOT NULL,
  `idVivienda` int(11) NOT NULL,
  `idServicioBano` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bloqueo`
--

CREATE TABLE `bloqueo` (
  `id` int(11) NOT NULL,
  `fechaInicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fechaFin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `activo` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `id` int(11) UNSIGNED NOT NULL,
  `region_id` int(11) UNSIGNED NOT NULL,
  `country_id` smallint(5) UNSIGNED NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `longitude` decimal(11,8) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `idPersona` int(11) NOT NULL,
  `idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_has_idioma`
--

CREATE TABLE `estado_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `id` int(11) NOT NULL,
  `path` text NOT NULL,
  `back` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habiacion`
--

CREATE TABLE `habiacion` (
  `id` int(11) NOT NULL,
  `idVivienda` int(11) NOT NULL,
  `idTipoHabitacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idioma`
--

CREATE TABLE `idioma` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linia_politica_cancelacion`
--

CREATE TABLE `linia_politica_cancelacion` (
  `id` int(11) NOT NULL,
  `idPoliticaCancelacion` int(11) NOT NULL,
  `dias` int(11) NOT NULL,
  `porcentaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mails`
--

CREATE TABLE `mails` (
  `id` int(10) UNSIGNED NOT NULL,
  `Content_Type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `From` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `In_Reply_To` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body_html` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `idSender` int(11) NOT NULL,
  `idReciever` int(11) NOT NULL,
  `mensaje` text NOT NULL,
  `fechaEnviado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `leido` tinyint(1) DEFAULT NULL,
  `idVivienda` int(11) DEFAULT NULL,
  `idReserva` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo_pago`
--

CREATE TABLE `metodo_pago` (
  `id` int(11) NOT NULL,
  `defecto` tinyint(1) DEFAULT '0',
  `IBAN` varchar(100) DEFAULT NULL,
  `nombreTitular` varchar(1000) DEFAULT NULL,
  `numeroTarjeta` varchar(100) DEFAULT NULL,
  `CVV` varchar(10) DEFAULT NULL,
  `mm` int(11) DEFAULT NULL,
  `año` int(11) DEFAULT NULL,
  `email` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo_pago_has_idioma`
--

CREATE TABLE `metodo_pago_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idMetodo_pago` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido1` varchar(100) NOT NULL,
  `apellido2` varchar(100) DEFAULT NULL,
  `DNI` varchar(25) DEFAULT NULL,
  `tlf` varchar(25) NOT NULL,
  `correo` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `idCiudad` int(11) UNSIGNED DEFAULT NULL,
  `idFoto` int(11) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(255) DEFAULT NULL,
  `stripe_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `card_brand` varchar(191) DEFAULT NULL,
  `card_last_four` varchar(4) DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `politicas_cancelacion`
--

CREATE TABLE `politicas_cancelacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(32) NOT NULL,
  `idVivienda` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `premium`
--

CREATE TABLE `premium` (
  `id` int(11) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `dominio` text,
  `maxCasas` int(11) NOT NULL,
  `sync` tinyint(1) DEFAULT '1',
  `fechaInicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fechaFin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `idTipoSubscripcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `premium_has_vivienda`
--

CREATE TABLE `premium_has_vivienda` (
  `idPremium` int(11) NOT NULL,
  `idVivienda` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rebaja`
--

CREATE TABLE `rebaja` (
  `id` int(11) NOT NULL,
  `dias` int(11) NOT NULL,
  `porcentaje` int(11) NOT NULL,
  `fechaInicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fechaFin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fechaCreacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `activa` tinyint(1) DEFAULT '0',
  `idTarifa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regions`
--

CREATE TABLE `regions` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(10) NOT NULL,
  `country_id` smallint(5) UNSIGNED NOT NULL,
  `lat` decimal(10,8) DEFAULT NULL,
  `lng` decimal(10,8) DEFAULT NULL,
  `zoom` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id` int(11) NOT NULL,
  `checkIn` timestamp NOT NULL DEFAULT '2012-12-12 11:00:00',
  `checkOut` timestamp NOT NULL DEFAULT '2012-12-12 11:00:00',
  `fechaReserva` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `precio` decimal(11,2) NOT NULL,
  `totalClientes` int(11) NOT NULL,
  `idVivienda` int(11) NOT NULL,
  `idMetodoPago` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Disparadores `reserva`
--
DELIMITER $$
CREATE TRIGGER `after_insert_reserva` AFTER INSERT ON `reserva` FOR EACH ROW INSERT INTO reserva_has_estado
    (idReserva, idEstado)
  values (NEW.id, 3)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva_has_estado`
--

CREATE TABLE `reserva_has_estado` (
  `idReserva` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `fechaCambio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva_has_politica_cancelacion`
--

CREATE TABLE `reserva_has_politica_cancelacion` (
  `idReserva` int(11) NOT NULL,
  `idPoliticaCancelacion` int(11) NOT NULL,
  `fechaInicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fechaFin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `id` int(11) NOT NULL,
  `icon` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_baño`
--

CREATE TABLE `servicio_baño` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_baño_has_idioma`
--

CREATE TABLE `servicio_baño_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idServicioBano` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_has_idioma`
--

CREATE TABLE `servicio_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idServicio` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `stripe_plan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarifa`
--

CREATE TABLE `tarifa` (
  `id` int(11) NOT NULL,
  `fechaInicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fechaFin` timestamp NULL DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `general` tinyint(1) DEFAULT '0',
  `idPoliticaCancelacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_cama`
--

CREATE TABLE `tipo_cama` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_cama_has_idioma`
--

CREATE TABLE `tipo_cama_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idTipo_cama` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_habitacion`
--

CREATE TABLE `tipo_habitacion` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_habitacion_has_idioma`
--

CREATE TABLE `tipo_habitacion_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idTipo_habitacion` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_subscripcion`
--

CREATE TABLE `tipo_subscripcion` (
  `id` int(11) NOT NULL,
  `preu` float NOT NULL,
  `temps` datetime NOT NULL,
  `maxCasas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_subscripcion_has_idioma`
--

CREATE TABLE `tipo_subscripcion_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idTipo_subscripcion` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_valoracion`
--

CREATE TABLE `tipo_valoracion` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_valoracion_has_idioma`
--

CREATE TABLE `tipo_valoracion_has_idioma` (
  `idTipo_valoracion` int(11) NOT NULL,
  `idIdoma` int(11) NOT NULL,
  `nombre` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_vivienda`
--

CREATE TABLE `tipo_vivienda` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_vivienda_has_idioma`
--

CREATE TABLE `tipo_vivienda_has_idioma` (
  `idIdioma` int(11) NOT NULL,
  `idTipo_vivienda` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('verifyAcc','changePass') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion_cliente`
--

CREATE TABLE `valoracion_cliente` (
  `idVendedor` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `mensaje` text,
  `bien` tinyint(1) NOT NULL,
  `fechaValoracion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idReserva` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion_has_tipo_valoracion`
--

CREATE TABLE `valoracion_has_tipo_valoracion` (
  `idValoracion` int(11) NOT NULL,
  `idTipoValoracion` int(11) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Disparadores `valoracion_has_tipo_valoracion`
--
DELIMITER $$
CREATE TRIGGER `update_media_on_insert` AFTER INSERT ON `valoracion_has_tipo_valoracion` FOR EACH ROW update valoracion_vivienda set media = (select avg(valor) avg
                                            from valoracion_has_tipo_valoracion where idValoracion = new.idValoracion) where id = new.idValoracion
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion_vivienda`
--

CREATE TABLE `valoracion_vivienda` (
  `id` int(11) NOT NULL,
  `idPersona` int(11) NOT NULL,
  `mensaje` text,
  `idVivienda` int(11) NOT NULL,
  `idReserva` int(100) NOT NULL,
  `media` decimal(12,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor_vivienda`
--

CREATE TABLE `vendedor_vivienda` (
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vivienda`
--

CREATE TABLE `vivienda` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8 NOT NULL,
  `capacidad` int(11) NOT NULL,
  `coordX` varchar(20) NOT NULL,
  `coordY` varchar(20) NOT NULL,
  `metrosCuadrados` int(11) DEFAULT NULL,
  `calle` text NOT NULL,
  `horaEntrada` time DEFAULT NULL,
  `horaSalida` time DEFAULT NULL,
  `alquilerAutomatico` tinyint(1) NOT NULL DEFAULT '0',
  `destacada` tinyint(1) DEFAULT '0',
  `idTipoVivienda` int(11) NOT NULL,
  `idCiudad` int(11) UNSIGNED NOT NULL,
  `idVendedor` int(11) NOT NULL,
  `descripcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vivienda_has_bloqueo`
--

CREATE TABLE `vivienda_has_bloqueo` (
  `idVivienda` int(11) NOT NULL,
  `idBloqueo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vivienda_has_fotos`
--

CREATE TABLE `vivienda_has_fotos` (
  `idVivienda` int(11) NOT NULL,
  `idFoto` int(11) NOT NULL,
  `posicion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vivienda_has_servicio`
--

CREATE TABLE `vivienda_has_servicio` (
  `idVivienda` int(11) NOT NULL,
  `idServicio` int(11) NOT NULL,
  `activo` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vivienda_has_tarifa`
--

CREATE TABLE `vivienda_has_tarifa` (
  `idVivienda` int(11) NOT NULL,
  `idTarifa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `baño`
--
ALTER TABLE `baño`
  ADD PRIMARY KEY (`idVivienda`,`id`),
  ADD KEY `idServicioBano` (`idServicioBano`);

--
-- Indices de la tabla `bloqueo`
--
ALTER TABLE `bloqueo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_region_name` (`country_id`,`region_id`,`name`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idPersona`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`idPersona`),
  ADD KEY `idRol` (`idRol`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_has_idioma`
--
ALTER TABLE `estado_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idEstado`),
  ADD KEY `idEstado` (`idEstado`);

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `habiacion`
--
ALTER TABLE `habiacion`
  ADD PRIMARY KEY (`idVivienda`,`id`),
  ADD KEY `idTipoHabitacion` (`idTipoHabitacion`);

--
-- Indices de la tabla `idioma`
--
ALTER TABLE `idioma`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `linia_politica_cancelacion`
--
ALTER TABLE `linia_politica_cancelacion`
  ADD PRIMARY KEY (`idPoliticaCancelacion`,`id`);

--
-- Indices de la tabla `mails`
--
ALTER TABLE `mails`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idReciever` (`idReciever`),
  ADD KEY `idSender` (`idSender`),
  ADD KEY `idVivienda` (`idVivienda`),
  ADD KEY `idReserva` (`idReserva`);

--
-- Indices de la tabla `metodo_pago`
--
ALTER TABLE `metodo_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `metodo_pago_has_idioma`
--
ALTER TABLE `metodo_pago_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idMetodo_pago`),
  ADD KEY `idMetodo_pago` (`idMetodo_pago`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `DNI` (`DNI`),
  ADD KEY `idCiudad` (`idCiudad`);

--
-- Indices de la tabla `politicas_cancelacion`
--
ALTER TABLE `politicas_cancelacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `politicas_cancelacion_vivienda_id_fk` (`idVivienda`);

--
-- Indices de la tabla `premium`
--
ALTER TABLE `premium`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTipoSubscripcion` (`idTipoSubscripcion`);

--
-- Indices de la tabla `premium_has_vivienda`
--
ALTER TABLE `premium_has_vivienda`
  ADD PRIMARY KEY (`idPremium`,`idVivienda`),
  ADD KEY `idVivienda` (`idVivienda`);

--
-- Indices de la tabla `rebaja`
--
ALTER TABLE `rebaja`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTarifa` (`idTarifa`);

--
-- Indices de la tabla `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_name` (`country_id`,`name`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCliente` (`idCliente`),
  ADD KEY `idMetodoPago` (`idMetodoPago`),
  ADD KEY `idVivienda` (`idVivienda`);

--
-- Indices de la tabla `reserva_has_estado`
--
ALTER TABLE `reserva_has_estado`
  ADD PRIMARY KEY (`idReserva`,`idEstado`),
  ADD KEY `idEstado` (`idEstado`);

--
-- Indices de la tabla `reserva_has_politica_cancelacion`
--
ALTER TABLE `reserva_has_politica_cancelacion`
  ADD PRIMARY KEY (`idReserva`,`idPoliticaCancelacion`),
  ADD KEY `idPoliticaCancelacion` (`idPoliticaCancelacion`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicio_baño`
--
ALTER TABLE `servicio_baño`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicio_baño_has_idioma`
--
ALTER TABLE `servicio_baño_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idServicioBano`),
  ADD KEY `idServicioBano` (`idServicioBano`);

--
-- Indices de la tabla `servicio_has_idioma`
--
ALTER TABLE `servicio_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idServicio`),
  ADD KEY `idServicio` (`idServicio`);

--
-- Indices de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tarifa`
--
ALTER TABLE `tarifa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPolitcaCancelacion` (`idPoliticaCancelacion`);

--
-- Indices de la tabla `tipo_cama`
--
ALTER TABLE `tipo_cama`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_cama_has_idioma`
--
ALTER TABLE `tipo_cama_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idTipo_cama`),
  ADD KEY `idTipo_cama` (`idTipo_cama`);

--
-- Indices de la tabla `tipo_habitacion`
--
ALTER TABLE `tipo_habitacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_habitacion_has_idioma`
--
ALTER TABLE `tipo_habitacion_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idTipo_habitacion`),
  ADD KEY `idTipo_habitacion` (`idTipo_habitacion`);

--
-- Indices de la tabla `tipo_subscripcion`
--
ALTER TABLE `tipo_subscripcion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_subscripcion_has_idioma`
--
ALTER TABLE `tipo_subscripcion_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idTipo_subscripcion`),
  ADD KEY `idPreimum` (`idTipo_subscripcion`);

--
-- Indices de la tabla `tipo_valoracion`
--
ALTER TABLE `tipo_valoracion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_valoracion_has_idioma`
--
ALTER TABLE `tipo_valoracion_has_idioma`
  ADD PRIMARY KEY (`idIdoma`,`idTipo_valoracion`),
  ADD KEY `idTipoValoracion` (`idTipo_valoracion`);

--
-- Indices de la tabla `tipo_vivienda`
--
ALTER TABLE `tipo_vivienda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_vivienda_has_idioma`
--
ALTER TABLE `tipo_vivienda_has_idioma`
  ADD PRIMARY KEY (`idIdioma`,`idTipo_vivienda`),
  ADD KEY `idTipo_vivienda` (`idTipo_vivienda`);

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`email`,`type`),
  ADD KEY `token` (`token`(191));

--
-- Indices de la tabla `valoracion_cliente`
--
ALTER TABLE `valoracion_cliente`
  ADD KEY `idCliente` (`idCliente`),
  ADD KEY `idVendedor` (`idVendedor`),
  ADD KEY `idReserva` (`idReserva`);

--
-- Indices de la tabla `valoracion_has_tipo_valoracion`
--
ALTER TABLE `valoracion_has_tipo_valoracion`
  ADD KEY `idTipoValoracion` (`idTipoValoracion`),
  ADD KEY `idValoracion` (`idValoracion`);

--
-- Indices de la tabla `valoracion_vivienda`
--
ALTER TABLE `valoracion_vivienda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPersona` (`idPersona`),
  ADD KEY `idVivienda` (`idVivienda`),
  ADD KEY `idReserva` (`idReserva`);

--
-- Indices de la tabla `vendedor_vivienda`
--
ALTER TABLE `vendedor_vivienda`
  ADD PRIMARY KEY (`idPersona`);

--
-- Indices de la tabla `vivienda`
--
ALTER TABLE `vivienda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCiudad` (`idCiudad`),
  ADD KEY `idTipoVivienda` (`idTipoVivienda`),
  ADD KEY `idVendedor` (`idVendedor`);

--
-- Indices de la tabla `vivienda_has_bloqueo`
--
ALTER TABLE `vivienda_has_bloqueo`
  ADD PRIMARY KEY (`idVivienda`,`idBloqueo`),
  ADD KEY `idBloqueo` (`idBloqueo`);

--
-- Indices de la tabla `vivienda_has_fotos`
--
ALTER TABLE `vivienda_has_fotos`
  ADD PRIMARY KEY (`idVivienda`,`idFoto`),
  ADD KEY `idFoto` (`idFoto`);

--
-- Indices de la tabla `vivienda_has_servicio`
--
ALTER TABLE `vivienda_has_servicio`
  ADD PRIMARY KEY (`idVivienda`,`idServicio`),
  ADD KEY `idServicio` (`idServicio`);

--
-- Indices de la tabla `vivienda_has_tarifa`
--
ALTER TABLE `vivienda_has_tarifa`
  ADD PRIMARY KEY (`idVivienda`,`idTarifa`),
  ADD KEY `idTarifa` (`idTarifa`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bloqueo`
--
ALTER TABLE `bloqueo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=726713;
--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
--
-- AUTO_INCREMENT de la tabla `idioma`
--
ALTER TABLE `idioma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `mails`
--
ALTER TABLE `mails`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `metodo_pago`
--
ALTER TABLE `metodo_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
--
-- AUTO_INCREMENT de la tabla `politicas_cancelacion`
--
ALTER TABLE `politicas_cancelacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `premium`
--
ALTER TABLE `premium`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `rebaja`
--
ALTER TABLE `rebaja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `regions`
--
ALTER TABLE `regions`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=971;
--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=259;
--
-- AUTO_INCREMENT de la tabla `servicio_baño`
--
ALTER TABLE `servicio_baño`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tarifa`
--
ALTER TABLE `tarifa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `tipo_cama`
--
ALTER TABLE `tipo_cama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tipo_habitacion`
--
ALTER TABLE `tipo_habitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tipo_subscripcion`
--
ALTER TABLE `tipo_subscripcion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tipo_valoracion`
--
ALTER TABLE `tipo_valoracion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `tipo_vivienda`
--
ALTER TABLE `tipo_vivienda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `valoracion_vivienda`
--
ALTER TABLE `valoracion_vivienda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `vivienda`
--
ALTER TABLE `vivienda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `baño`
--
ALTER TABLE `baño`
  ADD CONSTRAINT `baño_ibfk_1` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `baño_ibfk_2` FOREIGN KEY (`idServicioBano`) REFERENCES `servicio_baño` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`idRol`) REFERENCES `rol` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `estado_has_idioma`
--
ALTER TABLE `estado_has_idioma`
  ADD CONSTRAINT `estado_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `estado_has_idioma_ibfk_2` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `habiacion`
--
ALTER TABLE `habiacion`
  ADD CONSTRAINT `habiacion_ibfk_1` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `habiacion_ibfk_2` FOREIGN KEY (`idTipoHabitacion`) REFERENCES `tipo_habitacion` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `linia_politica_cancelacion`
--
ALTER TABLE `linia_politica_cancelacion`
  ADD CONSTRAINT `linia_politica_cancelacion_ibfk_1` FOREIGN KEY (`idPoliticaCancelacion`) REFERENCES `politicas_cancelacion` (`id`);

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`idSender`) REFERENCES `persona` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `mensajes_ibfk_2` FOREIGN KEY (`idReciever`) REFERENCES `persona` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `mensajes_ibfk_3` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`),
  ADD CONSTRAINT `mensajes_ibfk_4` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`);

--
-- Filtros para la tabla `metodo_pago_has_idioma`
--
ALTER TABLE `metodo_pago_has_idioma`
  ADD CONSTRAINT `metodo_pago_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `metodo_pago_has_idioma_ibfk_2` FOREIGN KEY (`idMetodo_pago`) REFERENCES `metodo_pago` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `idCiudad_fk` FOREIGN KEY (`idCiudad`) REFERENCES `cities` (`id`);

--
-- Filtros para la tabla `politicas_cancelacion`
--
ALTER TABLE `politicas_cancelacion`
  ADD CONSTRAINT `politicas_cancelacion_vivienda_id_fk` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `premium`
--
ALTER TABLE `premium`
  ADD CONSTRAINT `premium_ibfk_1` FOREIGN KEY (`idTipoSubscripcion`) REFERENCES `tipo_subscripcion` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `premium_has_vivienda`
--
ALTER TABLE `premium_has_vivienda`
  ADD CONSTRAINT `premium_has_vivienda_ibfk_1` FOREIGN KEY (`idPremium`) REFERENCES `premium` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `premium_has_vivienda_ibfk_2` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `rebaja`
--
ALTER TABLE `rebaja`
  ADD CONSTRAINT `rebaja_ibfk_1` FOREIGN KEY (`idTarifa`) REFERENCES `tarifa` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`idMetodoPago`) REFERENCES `metodo_pago` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reserva_ibfk_3` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idPersona`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva_has_estado`
--
ALTER TABLE `reserva_has_estado`
  ADD CONSTRAINT `reserva_has_estado_ibfk_1` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reserva_has_estado_ibfk_2` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva_has_politica_cancelacion`
--
ALTER TABLE `reserva_has_politica_cancelacion`
  ADD CONSTRAINT `reserva_has_politica_cancelacion_ibfk_1` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`),
  ADD CONSTRAINT `reserva_has_politica_cancelacion_ibfk_2` FOREIGN KEY (`idPoliticaCancelacion`) REFERENCES `politicas_cancelacion` (`id`);

--
-- Filtros para la tabla `servicio_baño_has_idioma`
--
ALTER TABLE `servicio_baño_has_idioma`
  ADD CONSTRAINT `servicio_baño_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `servicio_baño_has_idioma_ibfk_2` FOREIGN KEY (`idServicioBano`) REFERENCES `servicio_baño` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_has_idioma`
--
ALTER TABLE `servicio_has_idioma`
  ADD CONSTRAINT `servicio_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `servicio_has_idioma_ibfk_2` FOREIGN KEY (`idServicio`) REFERENCES `servicio` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tarifa`
--
ALTER TABLE `tarifa`
  ADD CONSTRAINT `tarifa_ibfk_1` FOREIGN KEY (`idPoliticaCancelacion`) REFERENCES `politicas_cancelacion` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tipo_cama_has_idioma`
--
ALTER TABLE `tipo_cama_has_idioma`
  ADD CONSTRAINT `tipo_cama_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tipo_cama_has_idioma_ibfk_2` FOREIGN KEY (`idTipo_cama`) REFERENCES `tipo_cama` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tipo_habitacion_has_idioma`
--
ALTER TABLE `tipo_habitacion_has_idioma`
  ADD CONSTRAINT `tipo_habitacion_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tipo_habitacion_has_idioma_ibfk_2` FOREIGN KEY (`idTipo_habitacion`) REFERENCES `tipo_habitacion` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tipo_subscripcion_has_idioma`
--
ALTER TABLE `tipo_subscripcion_has_idioma`
  ADD CONSTRAINT `tipo_subscripcion_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tipo_subscripcion_has_idioma_ibfk_2` FOREIGN KEY (`idTipo_subscripcion`) REFERENCES `tipo_subscripcion` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tipo_valoracion_has_idioma`
--
ALTER TABLE `tipo_valoracion_has_idioma`
  ADD CONSTRAINT `tipo_valoracion_has_idioma_ibfk_1` FOREIGN KEY (`idIdoma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tipo_valoracion_has_idioma_ibfk_2` FOREIGN KEY (`idTipo_valoracion`) REFERENCES `tipo_valoracion` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tipo_vivienda_has_idioma`
--
ALTER TABLE `tipo_vivienda_has_idioma`
  ADD CONSTRAINT `tipo_vivienda_has_idioma_ibfk_1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tipo_vivienda_has_idioma_ibfk_2` FOREIGN KEY (`idTipo_vivienda`) REFERENCES `tipo_vivienda` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `valoracion_cliente`
--
ALTER TABLE `valoracion_cliente`
  ADD CONSTRAINT `idReserva` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`),
  ADD CONSTRAINT `valoracion_cliente_ibfk_1` FOREIGN KEY (`idVendedor`) REFERENCES `vendedor_vivienda` (`idPersona`),
  ADD CONSTRAINT `valoracion_cliente_ibfk_2` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idPersona`);

--
-- Filtros para la tabla `valoracion_has_tipo_valoracion`
--
ALTER TABLE `valoracion_has_tipo_valoracion`
  ADD CONSTRAINT `valoracion_has_tipo_valoracion_ibfk_1` FOREIGN KEY (`idValoracion`) REFERENCES `valoracion_vivienda` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `valoracion_has_tipo_valoracion_ibfk_2` FOREIGN KEY (`idTipoValoracion`) REFERENCES `tipo_valoracion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `valoracion_vivienda`
--
ALTER TABLE `valoracion_vivienda`
  ADD CONSTRAINT `valoracion_vivienda_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `valoracion_vivienda_ibfk_2` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `valoracion_vivienda_ibfk_3` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `vendedor_vivienda`
--
ALTER TABLE `vendedor_vivienda`
  ADD CONSTRAINT `vendedor_vivienda_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `vivienda`
--
ALTER TABLE `vivienda`
  ADD CONSTRAINT `idCiudad` FOREIGN KEY (`idCiudad`) REFERENCES `cities` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `vivienda_ibfk_1` FOREIGN KEY (`idTipoVivienda`) REFERENCES `tipo_vivienda` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `vivienda_ibfk_4` FOREIGN KEY (`idVendedor`) REFERENCES `vendedor_vivienda` (`idPersona`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `vivienda_has_bloqueo`
--
ALTER TABLE `vivienda_has_bloqueo`
  ADD CONSTRAINT `vivienda_has_bloqueo_ibfk_1` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `vivienda_has_bloqueo_ibfk_2` FOREIGN KEY (`idBloqueo`) REFERENCES `bloqueo` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `vivienda_has_fotos`
--
ALTER TABLE `vivienda_has_fotos`
  ADD CONSTRAINT `vivienda_has_fotos_ibfk_1` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vivienda_has_fotos_ibfk_2` FOREIGN KEY (`idFoto`) REFERENCES `fotos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `vivienda_has_servicio`
--
ALTER TABLE `vivienda_has_servicio`
  ADD CONSTRAINT `vivienda_has_servicio_ibfk_1` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `vivienda_has_servicio_ibfk_2` FOREIGN KEY (`idServicio`) REFERENCES `servicio` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `vivienda_has_tarifa`
--
ALTER TABLE `vivienda_has_tarifa`
  ADD CONSTRAINT `vivienda_has_tarifa_ibfk_1` FOREIGN KEY (`idVivienda`) REFERENCES `vivienda` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `vivienda_has_tarifa_ibfk_2` FOREIGN KEY (`idTarifa`) REFERENCES `tarifa` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
