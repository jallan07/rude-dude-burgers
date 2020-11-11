// dependencies
const express = require("express");
const orm = require("./config/orm");

// define the app and port variables
const app = express();
const PORT = process.env.PORT || 8080;

// testing controller methods
// orm.selectAll("burgers");
orm.insertOne("burgers", "burger_name", "devoured", "The Godfather", false);
