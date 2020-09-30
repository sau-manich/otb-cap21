medidors
lecturas
historial_cancelacions
cancelacions

CREATE TABLE `medidors` (
  `idMedidor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_id` int(10) unsigned NOT NULL,
  `ordenMedidor` varchar(50) NOT NULL,
  `numeroMedidor` varchar(50) NOT NULL,
  `direccion` varchar(70) NOT NULL,
  `fechaInstalacion` date NOT NULL,
  `estado` enum('ACTIVO','PASIVO','INACTIVO') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idMedidor`),
  UNIQUE KEY `medidors_numeromedidor_unique` (`numeroMedidor`),
  KEY `medidors_usuario_id_foreign` (`usuario_id`),
  CONSTRAINT `medidors_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`idUsuario`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2472 DEFAULT CHARSET=utf8mb4;



INSERT INTO `medidors` VALUES (2,2,'53','7208062','21 de Septiembre','2016-06-01','ACTIVO','2020-04-06 15:57:54','2020-04-06 15:57:54');




CREATE TABLE `lecturas` (
  `idLectura` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `medidor_id` int(10) unsigned NOT NULL,
  `usuario_id` int(10) unsigned NOT NULL,
  `medida` int(10) unsigned NOT NULL,
  `fechaMedicion` datetime NOT NULL DEFAULT '2020-04-06 15:55:37',
  `estado` enum('INITIAL','NORMAL','EDITED') NOT NULL DEFAULT 'INITIAL',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idLectura`),
  KEY `lecturas_medidor_id_foreign` (`medidor_id`),
  KEY `lecturas_usuario_id_foreign` (`usuario_id`),
  CONSTRAINT `lecturas_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`idUsuario`) ON DELETE CASCADE,
  CONSTRAINT `lecturas_medidor_id_foreign` FOREIGN KEY (`medidor_id`) REFERENCES `medidors` (`idMedidor`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2472 DEFAULT CHARSET=utf8mb4;



INSERT INTO `lecturas` VALUES (1373,53,2,0,'2019-01-05 00:00:00','INITIAL','2019-01-05 00:00:00','2019-01-05 00:00:00'),
(1383,53,2,0,'2019-02-02 00:00:00','NORMAL','2019-02-02 00:00:00','2019-02-02 00:00:00'),
(1404,53,2,0,'2019-03-02 00:00:00','NORMAL','2019-03-02 00:00:00','2019-03-02 00:00:00'),
(1426,53,2,0,'2019-04-06 00:00:00','NORMAL','2019-04-06 00:00:00','2019-04-06 00:00:00'),
(1445,53,2,0,'2019-05-04 00:00:00','NORMAL','2019-05-04 00:00:00','2019-05-04 00:00:00'),
(1463,53,2,0,'2019-06-01 00:00:00','NORMAL','2019-06-01 00:00:00','2019-06-01 00:00:00'),
(1478,53,2,0,'2019-07-06 00:00:00','NORMAL','2019-07-06 00:00:00','2019-07-06 00:00:00'),
(1498,53,2,0,'2019-08-03 00:00:00','NORMAL','2019-08-03 00:00:00','2019-08-03 00:00:00'),
(1514,53,2,0,'2019-08-31 00:00:00','NORMAL','2019-08-31 00:00:00','2019-08-31 00:00:00'),
(1533,53,2,0,'2019-10-05 00:00:00','NORMAL','2019-10-05 00:00:00','2019-10-05 00:00:00'),
(1551,53,2,0,'2019-11-02 00:00:00','NORMAL','2019-11-02 00:00:00','2019-11-02 00:00:00'),
(1551,53,2,0,'2019-11-30 00:00:00','NORMAL','2019-11-30 00:00:00','2019-11-30 00:00:00'),
(1611,53,2,0,'2020-01-04 00:00:00','NORMAL','2020-01-04 00:00:00','2020-01-04 00:00:00'),
(1640,53,2,0,'2020-02-01 00:00:00','NORMAL','2020-02-01 00:00:00','2020-02-01 00:00:00');

-- Mira estos casos joven, hay meses repetidos pero la insercion al sistema se hace un dia antes y algunas veces toco 2 veces en el mismo mes
-- (22,22,1,0,'2020-02-29 00:00:00','NORMAL','2020-04-06 15:57:54','2020-04-06 15:57:54');



CREATE TABLE `historial_cancelacions` (
  `idHistorialCancelaciones` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lectura_id` int(10) unsigned NOT NULL,
  `cancelacion_id` int(10) unsigned DEFAULT NULL,
  `diferenciaMedida` int(10) unsigned NOT NULL,
  `precioUnidad` double(8,2) unsigned NOT NULL,
  `subTotal` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `montoCancelado` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `fechaHoraHCancelacion` datetime NOT NULL DEFAULT '2020-04-06 15:55:38',
  `estadoMedicion` enum('PENDING','IN_PROCESS','COMPLETED','CANCELLED') NOT NULL DEFAULT 'PENDING',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idHistorialCancelaciones`),
  KEY `historial_cancelacions_lectura_id_foreign` (`lectura_id`),
  KEY `historial_cancelacions_cancelacion_id_foreign` (`cancelacion_id`),
  CONSTRAINT `historial_cancelacions_cancelacion_id_foreign` FOREIGN KEY (`cancelacion_id`) REFERENCES `cancelacions` (`idCancelacion`) ON DELETE CASCADE,
  CONSTRAINT `historial_cancelacions_lectura_id_foreign` FOREIGN KEY (`lectura_id`) REFERENCES `lecturas` (`idLectura`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- Joven aqui la mayoria de los datos me lo invente porque el sistema actual no maneja esto
INSERT INTO `historial_cancelacions` VALUES ('1', '1373', '1', '13', '1.00', '13.00', '13.00', '2019-01-06 00:00:00', 'COMPLETED', '2019-01-06 00:00:00', '2019-01-06 00:00:00'),
('2', '1383', '1', '10', '1.00', '10.00', '10.00', '2019-02-03 00:00:00', 'COMPLETED', '2019-02-03 00:00:00', '2019-02-03 00:00:00'),
('3', '1404', '1', '21', '1.00', '21.00', '21.00', '2019-03-03 00:00:00', 'COMPLETED', '2019-03-03 00:00:00', '2019-03-03 00:00:00'),
('4', '1426', '1', '22', '1.00', '22.00', '22.00', '2019-04-07 00:00:00', 'COMPLETED', '2019-04-07 00:00:00', '2019-04-07 00:00:00'),
('5', '1445', '1', '19', '1.00', '19.00', '19.00', '2019-05-05 00:00:00', 'COMPLETED', '2019-05-05 00:00:00', '2019-05-05 00:00:00'),
('6', '1463', '1', '18', '1.00', '18.00', '18.00', '2019-06-02 00:00:00', 'COMPLETED', '2019-06-02 00:00:00', '2019-06-02 00:00:00'),
('7', '1478', '1', '15', '1.00', '15.00', '15.00', '2019-07-07 00:00:00', 'COMPLETED', '2019-07-07 00:00:00', '2019-07-07 00:00:00'),
('8', '1498', '1', '14', '1.00', '14.00', '14.00', '2019-08-04 00:00:00', 'COMPLETED', '2019-08-04 00:00:00', '2019-08-04 00:00:00'),
('9', '1514', '1', '22', '1.00', '22.00', '22.00', '2019-09-01 00:00:00', 'COMPLETED', '2019-09-01 00:00:00', '2019-09-01 00:00:00'),
('10', '1533', '1', '19', '1.00', '19.00', '19.00', '2019-10-06 00:00:00', 'COMPLETED', '2019-10-06 00:00:00', '2019-10-06 00:00:00'),
('11', '1551', '1', '18', '1.00', '18.00', '18.00', '2019-11-07 00:00:00', 'COMPLETED', '2019-11-07 00:00:00', '2019-11-07 00:00:00'),
('12', '1551', '1', '10', '1.00', '10.00', '10.00', '2019-12-01 00:00:00', 'COMPLETED', '2019-12-01 00:00:00', '2019-12-01 00:00:00'),
('13', '1611', '1', '60', '1.00', '60.00', '60.00', '2020-01-05 00:00:00', 'COMPLETED', '2020-01-05 00:00:00', '2020-01-05 00:00:00'),
('14', '1640', '1', '29', '1.00', '29.00', '29.00', '2020-02-02 00:00:00', 'COMPLETED', '2020-02-02 00:00:00', '2020-02-02 00:00:00');


CREATE TABLE `cancelacions` (
  `idCancelacion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `montoCancelacion` double(10,2) unsigned NOT NULL,
  `fechaCancelacion` datetime NOT NULL DEFAULT '2020-04-06 15:55:38',
  `keyCancelacion` varchar(50) NOT NULL,
  `descartado` tinyint(1) NOT NULL DEFAULT '0',
  `moneda` enum('BOLIVIANOS','DOLARES','EUROS','OTRO') NOT NULL DEFAULT 'BOLIVIANOS',
  `tipoCancelacion` enum('EFECTIVO','DEPOSITO','CHEQUE','WEB','OTRO') NOT NULL DEFAULT 'EFECTIVO',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idCancelacion`),
  UNIQUE KEY `cancelacions_keycancelacion_unique` (`keyCancelacion`)
) ENGINE=InnoDB AUTO_INCREMENT=2472 DEFAULT CHARSET=utf8mb4;


-- Joven el Key cancelacion  hay que cambiar 

INSERT INTO `cancelacions` VALUES (1,13.00,'2019-01-06 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-01-06 00:00:00','2019-01-06 00:00:00'),
(2,10.00,'2019-02-03 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-02-03 00:00:00','2019-02-03 00:00:00'),
(3,21.00,'2019-03-03 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-03-03 00:00:00','2019-03-03 00:00:00'),
(4,22.00,'2019-04-07 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-04-07 00:00:00','2019-04-07 00:00:00'),
(5,19.00,'2019-05-05 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-05-05 00:00:00','2019-05-05 00:00:00'),
(6,18.00,'2019-06-02 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-06-02 00:00:00','2019-06-02 00:00:00'),
(7,15.00,'2019-07-07 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-07-07 00:00:00','2019-07-07 00:00:00'),
(8,14.00,'2019-08-04 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-08-04 00:00:00','2019-08-04 00:00:00'),
(9,22.00,'2019-09-01 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-09-01 00:00:00','2019-09-01 00:00:00'),
(10,19.00,'2019-10-06 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-10-06 00:00:00','2019-10-06 00:00:00'),
(11,18.00,'2019-11-07 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-11-07 00:00:00','2019-11-07 00:00:00'),
(12,10.00,'2019-12-01 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2019-12-01 00:00:00','2019-12-01 00:00:00'),
(13,60.00,'2020-01-05 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2020-01-05 00:00:00','2020-01-05 00:00:00'),
(14,29.00,'2020-02-02 00:00:00','e79065e0-7840-11ea-8fd4-919884cec37e',0,'BOLIVIANOS','EFECTIVO','2020-02-02 00:00:00','2020-02-02 00:00:00');


