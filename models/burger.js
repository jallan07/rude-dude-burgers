// dependencies
const orm = require("../config/orm.js");

// create functions that will interact with the database
const burger = {
	selectAll: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	insertOne: function (col1, val1, cb) {
		orm.insertOne("burgers", col1, val1, function (res) {
			cb(res);
		});
	},
	updateOne: function (col1, val1, id, idVal, cb) {
		orm.updateOne("burgers", col1, val1, id, idVal, function (res) {
			cb(res);
		});
	},
	deleteOne: function (col1, val1, cb) {
		orm.deleteOne("burgers", col1, val1, function (res) {
			cb(res);
		});
	},
};

// export the database functions for the controller
module.exports = burger;

// ========== Required Tasks ==========
// inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
