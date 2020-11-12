// dependencies
const { query } = require("express");
const connection = require("./connection.js");

// ORM methods for controllers
const orm = {
	selectAll: function (table, cb) {
		connection.query("SELECT * FROM ??", [table], function (err, data) {
			if (err) throw err;
			console.table(data);
			cb(data);
		});
	},
	insertOne: function (table, col1, col2, burger_name, devoured_status) {
		connection.query(
			"INSERT INTO ?? (??, ??) VALUES (?, ?)",
			[table, col1, col2, burger_name, devoured_status],
			function (err, data) {
				if (err) throw err;
				// log rows that have been affected
				let affected = data.affectedRows;
				console.log({ affected });
				// log in table format the full table of burgers in our database, including the one that was just added
				console.log(orm.selectAll("burgers"));
			}
		);
	},
	updateOne: function () {},
};

// export the module for use in the controllers
module.exports = orm;
