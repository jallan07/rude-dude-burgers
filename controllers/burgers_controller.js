// dependencies
const express = require("express");
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// create the router
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
	burger.select(function (data) {
		var hbsObject = {
			burgers: data,
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// export the router
module.exports = router;
