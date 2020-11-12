// dependencies
const { query } = require("express");
const connection = require("./connection.js");

// The below helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// ORM methods for controllers
const orm = {
	selectAll: function (table, cb) {
		connection.query("SELECT * FROM ??", [table], function (err, data) {
			if (err) throw err;
			console.table(data);
			cb(data);
		});
	},
	insertOne: function (table, col1, val1, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += col1.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(val1.length);
		queryString += ") ";
		console.log(queryString);
		connection.query(queryString, val1, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function () {},
};

// export the module for use in the controllers
module.exports = orm;
