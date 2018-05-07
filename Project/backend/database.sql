-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 1;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `mnse`;
CREATE DATABASE `mnse` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */;
USE `mnse`;

DROP TABLE IF EXISTS `Character`;
CREATE TABLE `Character` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE latin1_spanish_ci NOT NULL,
  `description` varchar(2048) COLLATE latin1_spanish_ci NOT NULL,
  `pic` varchar(128) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

INSERT INTO `Character` (`id`, `name`, `description`, `pic`) VALUES
(1,	'Mickey Mouse',	'Mickey Mouse is a funny animal cartoon character and the mascot of The Walt Disney Company. He was created by Walt Disney and Ub Iwerks at the Walt Disney Studios in 1928. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the world\\\'s most recognizable characters.\\n Mickey generally appears alongside his girlfriend Minnie Mouse, his pet dog Pluto, his friends Donald Duck and Goofy, and his nemesis Pete, among others (see Mickey Mouse universe). Though originally characterized as a mischievous antihero, Mickey was rebranded over time as an everyman, usually seen as a flawed, but adventurous hero. In 2009, Disney began to rebrand the character again by putting less emphasis on his pleasant, cheerful side and reintroducing the more mischievous and adventurous sides of his personality, beginning with the video game Epic Mickey.',	'mickeymouse.png'),
(2,	'Pluto',	'Pluto, also called Pluto the Pup,is a cartoon dog created in 1930 at Walt Disney Productions. He is a yellow-orange color, medium-sized, short-haired dog with black ears. Unlike most Disney characters, Pluto is not anthropomorphic beyond some characteristics such as facial expression. He is Mickey Mouse\'s pet. Officially a mixed-breed dog, he made his debut as a bloodhound in the Mickey Mouse cartoon The Chain Gang. Together with Mickey Mouse, Minnie Mouse, Donald Duck, Daisy Duck, and Goofy, Pluto is one of the \"Sensational Six\"—the biggest stars in the Disney universe. Though all six are non-human animals, Pluto alone is not dressed as a human',	'plutolmao.png'),
(3,	'Lilo Pelekai',	'Lilo is a young Hawaiian girl who lives on the island of Kaua?i with her older sister Nani and her extended family of alien visitors marooned on Earth. She is voiced by Daveigh Chase in all the films and Lilo & Stitch: The Series, except Lilo & Stitch 2: Stitch Has a Glitch where she was voiced by Dakota Fanning.\n Lilo is a young girl with long, straight black hair and brown eyes. She is most often seen wearing a mu?umu?u and sandals, but also wears other warm-weather clothing as well as traditional hula costumes. In Lilo & Stitch 2: Stitch Has a Glitch; her reflection in a mirror is compared to a picture of her young mother, suggesting that they look similar. In the episode \"Skip\" where an experiment (Experiment 089) is used to skip time ten then another ten years, it is mentioned that older Lilo looks a lot like her sister Nani.',	'lilo.png'),
(4,	'Stitch',	'Stitch (also known by his species name/\"birth\" name Experiment 626, pronounced \"six-two-six\") is a fictional character in Disney\'s Lilo & Stitch franchise. An illegally-made, genetically-engineered, extraterrestrial lifeform resembling a blue koala, he is one of the franchise\'s two title characters, alongside his adopter and best friend Lilo Pelekai, and its primary protagonist. Stitch was created by Lilo & Stitch co-writer and co-director Chris Sanders, who also voices him in all Western-produced media that he appears in, while Ben Diskin voices the character in the English versions of the Eastern-produced television series Stitch! and Stitch & Ai.In the franchise\'s chronology, he was originally created by Dr. Jumba Jookiba to cause chaos across the galaxy. Stitch is marked by his mischievous behavior, which endeared him to Lilo, who adopted him as her \"dog\". Through Lilo\'s beliefs in the Hawaiian concept of ?ohana, meaning family, Stitch developed from an uncaring, destructive creature to a loving, more self-conscious being who enjoys the company of his adoptive family on Earth. He became a firm believer of the ?ohana concept, and with the help of Lilo applied it to reform Jumba\'s 625 prior experiments, nearly all of whom Stitch treats as his \"cousins\".',	'stitch.png')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `description` = VALUES(`description`), `pic` = VALUES(`pic`);

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
  `description` varchar(2048) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `pic` varchar(128) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO `Movie` (`id`, `name`, `description`, `pic`) VALUES
(1,	'Toy Story',	'Toy Story is a 1995 American computer-animated buddy comedy adventure film produced by Pixar Animation Studios for Walt Disney Pictures. The directorial debut of John Lasseter, Toy Story was the first feature-length computer-animated film and the first feature film produced by Pixar. Taking place in a world where anthropomorphic toys pretend to be lifeless when humans are present, the film\'s plot focuses on the relationship between Woody, an old-fashioned pullstring cowboy doll (voiced by Tom Hanks), and Buzz Lightyear, an astronaut action figure (voiced by Tim Allen), as they evolve from rivals competing for the affections of Andy, their owner, to friends who work together to be reunited with Andy as his family prepares to move to a new home. The screenplay was written by Joss Whedon, Andrew Stanton, Joel Cohen and Alec Sokolow, based on a story by Lasseter, Pete Docter, Stanton and Joe Ranft. The film features music by Randy Newman, and was executive-produced by Steve Jobs and Edwin Catmull.',	'toystory1.png'),
(2,	'The Lion King',	'The Lion King is a 1994 American animated epic musical film produced by Walt Disney Feature Animation and released by Walt Disney Pictures. It is the 32nd Disney animated feature film, and the fifth animated film produced during a period known as the Disney Renaissance. The Lion King was directed by Roger Allers and Rob Minkoff, produced by Don Hahn, and has a screenplay credited to Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Its original songs were written by composer Elton John and lyricist Tim Rice, with a score by Hans Zimmer. The film features an ensemble voice cast that includes Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Moira Kelly, Nathan Lane, Ernie Sabella, Rowan Atkinson, Robert Guillaume, Madge Sinclair, Whoopi Goldberg, Cheech Marin, and Jim Cummings. The story takes place in a kingdom of lions in Africa and was influenced by William Shakespeare\'s Hamlet.The Lion King tells the story of Simba, a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba\'s uncle Scar (Mufasa\'s jealous younger brother), murders Mufasa, Simba is manipulated into thinking he was responsible and flees into exile. Upon maturation living with two wastrels, Simba is given some valuable perspective from his childhood friend, Nala, and his shaman, Rafiki, before returning to challenge Scar to end his tyranny and take his place in the Circle of Life as the rightful King.',	'thelionking1.png'),
(3,	'Big Hero 6',	'Não me apetece lol rip',	'bighero6.png'),
(4,	'Pocahontas',	'High ass niggas on the forest go ape shit bananas when they found out that they don\'t have any more munchies :(',	'pocahontas.png')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `description` = VALUES(`description`), `pic` = VALUES(`pic`);

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


-- 2018-05-07 19:33:21