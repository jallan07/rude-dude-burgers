// dependencies
const express = require("express");
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// create the router
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
	burger.selectAll(function (data) {
		let hbsObject = {
			burgers: data,
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function (req, res) {
	burger.insertOne(["burger_name"], [req.body.name], function (result) {
		// Send back the ID of the new quote
		res.json({ id: result.insertId });
	});
});

// export the router
module.exports = router;
