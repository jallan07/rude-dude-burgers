// dependencies
const mysql = require("mysql");

// create the conneciton variable
const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "mypasswordis6Str!pes",
	database: "burgers_db",
});

// establish a connection to the database
connection.connect(function (err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

// export the connection to use within the ORM
module.exports = connection;
