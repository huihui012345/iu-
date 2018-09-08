drop database if exists  iu;
CREATE DATABASE iu CHARSET=UTF8;
use iu;
DROP TABLE IF EXISTS `iu_index_carousel`;
create table iu_index_carousel(
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
INSERT INTO `iu_index_carousel` VALUES ('1', 'img/banner1.jpg', '轮播1', 'product_details.html?lid=28');
INSERT INTO `iu_index_carousel` VALUES ('2', 'img/banner2.jpg', '轮播2', 'product_details.html?lid=19');
INSERT INTO `iu_index_carousel` VALUES ('3', 'img/banner3.jpg', '轮播3', 'lookforward.html');
DROP TABLE IF EXISTS `iu_index_carousel_1`;
create table iu_index_carousel_1(
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
INSERT INTO `iu_index_carousel_1` VALUES ('1', 'img/dd0a801845f672ec281f18f1ef43ac54.jpg', '轮播1', 'product_details.html?lid=28');
INSERT INTO `iu_index_carousel_1` VALUES ('2', 'img/f867dbf1c04c82e0f1732a127d9d7f9c.jpg', '轮播2', 'product_details.html?lid=19');
INSERT INTO `iu_index_carousel_1` VALUES ('3', 'img/ef1802f0e865450e777226d63f4cdf7d.jpg', '轮播3', 'lookforward.html');
INSERT INTO `iu_index_carousel_1` VALUES ('4', 'img/77fd2ef81f35d5ce933ecbf7e0f2abe0.jpg', '轮播4', 'lookforward.html');
INSERT INTO `iu_index_carousel_1` VALUES ('5', 'img/08ff8a27670e63055dd56131cbe995f5.jpg', '轮播5', 'lookforward.html');
INSERT INTO `iu_index_carousel_1` VALUES ('6', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '轮播6', 'lookforward.html');




create table iu_index_carousel_2(
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
INSERT INTO `iu_index_carousel_2` VALUES ('1', 'img/0563143a4b56b902428b6d7a00f45a30.jpg', '1', 'product_details.html?lid=28');
INSERT INTO `iu_index_carousel_2` VALUES ('2', 'img/ceb507f8bf5a3ef7622dafa16d189dbb.jpg', '2', 'product_details.html?lid=19');
INSERT INTO `iu_index_carousel_2` VALUES ('3', 'img/e959d54f3bbb8bf5bcfbea18246300ba.jpg', '3', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('4', 'img/1c96a55a39acfd1338da77c357f7c378.jpg', '4', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('5', 'img/8cd6e35a4b84d4f0511ae0db5df572ca.jpg', '5', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('6', 'img/d2cea2b8d637f286f0af4f9b7e85fc58.jpg', '7', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('7', 'img/4bf9fdd7a49da0e3abe7fcb8f47f983e.jpg', '8', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('8', 'img/250097afbedeb399e0274b25799dea9d.jpg', '9', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('9', 'img/db9a04addeb39a8b15b6403b5c13879d.jpg', '10', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('10', 'img/6dcd2d8e14f7177f80c8de47271d730e.jpg', '11', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('11', 'img/6c870da69e3fae82cedc509336650990.jpg', '12', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('12', 'img/a2062770b3741cb402b88f8bda19bf01.jpg', '13', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('13', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '14', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('14', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '15', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('15', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '16', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('16', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '17', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('17', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '18', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('18', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '19', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('19', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '20', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('20', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '21', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('21', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '22', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('22', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '23', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('23', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '24', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('24', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '25', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('25', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '26', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('26', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '27', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('27', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '28', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('28', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '29', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('29', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '30', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('30', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '31', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('31', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '32', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('32', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '33', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('33', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '34', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('34', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '35', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('35', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '36', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('36', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '37', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('37', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '38', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('38', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '39', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('39', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '40', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('40', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '41', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('41', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '42', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('42', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '43', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('43', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '44', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('44', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '45', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('45', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '46', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('46', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '47', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('47', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '78', 'lookforward.html');
INSERT INTO `iu_index_carousel_2` VALUES ('48', 'img/ea1410a52667c300efaddcdef39f4fb4.jpg', '49', 'lookforward.html');



