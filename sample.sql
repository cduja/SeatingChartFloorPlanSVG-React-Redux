CREATE DATABASE events;

USE events;

CREATE TABLE scplans (
	id   INTEGER PRIMARY KEY AUTO_INCREMENT,
	event_id INTEGER AUTO_INCREMENT,
	tabletype   INT(255) NOT NULL,
	position_x	DECIMAL NOT NULL,
	position_y	DECIMAL NOT NULL,
	seatnums	INTEGER(255) NOT NULL
) CHARACTER SET utf8;

SHOW TABLES;

-- INSERT INTO authors (first_name, last_name) VALUES("William","Shakespeare");
-- INSERT INTO authors (first_name, middle_name, last_name) VALUES("Edgar", "Allan", "Poe");
-- INSERT INTO authors (first_name, last_name) VALUES("Fyodor","Dostoyevsky");
-- INSERT INTO authors (first_name, last_name) VALUES("Gabriel","Garcia Marquez");

SELECT * FROM scplans;
