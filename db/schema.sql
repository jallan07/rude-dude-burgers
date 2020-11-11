-- drop the database if it already exists
DROP DATABASE IF EXISTS burgers_db;

-- create the database
CREATE DATABASE burgers_db;

-- use the database
USE burgers_db;

-- create the table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(155),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);