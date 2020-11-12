// dependencies
const express = require("express");
const orm = require("./config/orm.js");
const path = require("path");

// define the app and port variables
const app = express();
const PORT = process.env.PORT || 8080;

// serve static content for the app from the public directory
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "../", "/public")));

// parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require("express-handlebars");
app.set("view engine", "handlebars");
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main",
	})
);

// import routes and give the server access to them
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start server and begin listening for client requests
app.listen(PORT, function () {
	console.log("Server listening on: http://localhost:" + PORT);
});

//========== TESTS ============
// orm.selectAll("burgers");
// orm.insertOne("burgers", "burger_name", "devoured", "The Godfather", false);
