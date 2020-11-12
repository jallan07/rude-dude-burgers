// dependencies
const orm = require("../config/orm.js");

// create functions that will interact with the database
const burger = {
	select: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	insert: function () {},
	update: function () {},
};

// export the database functions for the controller
module.exports = burger;

// ========== Required Tasks ==========
// inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
