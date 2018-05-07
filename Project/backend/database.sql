-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';

DROP DATABASE IF EXISTS `mnse`;
CREATE DATABASE `mnse` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */;
USE `mnse`;

DROP TABLE IF EXISTS `Character`;
CREATE TABLE `Character` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE latin1_spanish_ci NOT NULL,
  `info` varchar(128) COLLATE latin1_spanish_ci NOT NULL,
  `pic` varchar(128) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


DROP TABLE IF EXISTS `FavouriteCharacter`;
CREATE TABLE `FavouriteCharacter` (
  `idUser` int(10) unsigned NOT NULL,
  `idCharacter` int(10) unsigned NOT NULL,
  KEY `idUser` (`idUser`),
  KEY `idCharacter` (`idCharacter`),
  CONSTRAINT `FavouriteCharacter_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `User` (`id`),
  CONSTRAINT `FavouriteCharacter_ibfk_2` FOREIGN KEY (`idCharacter`) REFERENCES `Character` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


DROP TABLE IF EXISTS `FavouriteMovie`;
CREATE TABLE `FavouriteMovie` (
  `idUser` int(10) unsigned NOT NULL,
  `idMovie` int(10) unsigned NOT NULL,
  KEY `idUser` (`idUser`),
  KEY `idMovie` (`idMovie`),
  CONSTRAINT `FavouriteMovie_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `User` (`id`),
  CONSTRAINT `FavouriteMovie_ibfk_2` FOREIGN KEY (`idMovie`) REFERENCES `Movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


DROP TABLE IF EXISTS `Follower`;
CREATE TABLE `Follower` (
  `idUser1` int(10) unsigned NOT NULL,
  `idUser2` int(10) unsigned NOT NULL,
  KEY `idUser1` (`idUser1`),
  KEY `idUser2` (`idUser2`),
  CONSTRAINT `Follower_ibfk_1` FOREIGN KEY (`idUser1`) REFERENCES `User` (`id`),
  CONSTRAINT `Follower_ibfk_2` FOREIGN KEY (`idUser2`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


DROP TABLE IF EXISTS `Movie`;
CREATE TABLE `Movie` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `descripton` varchar(256) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `pic` varchar(128) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE latin1_spanish_ci NOT NULL,
  `description` varchar(256) COLLATE latin1_spanish_ci DEFAULT NULL,
  `profile_pic` varchar(128) COLLATE latin1_spanish_ci DEFAULT NULL,
  `cover_pic` varchar(128) COLLATE latin1_spanish_ci DEFAULT NULL,
  `location` varchar(128) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


-- 2018-05-07 15:45:12