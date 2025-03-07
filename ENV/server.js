const env = require("dotenv").config(); // Load environment variables from .env file
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

app.get("/", (req, res) => {
	res.send("Environment Variables in Express.js");
});

console.log("Database Host:", process.env.DB_HOST);
console.log("Environment Mode:", process.env.ENVIRONMENT);


// In development mode, you might enable logging and debugging.
// In production mode, you might disable debugging and enable optimizations.
const ENVIRONMENT = process.env.ENVIRONMENT || "development";
if (ENVIRONMENT === "development") {
	console.log("Debug mode enabled");
} else {
	console.log("Production mode active");
}
const config = require("./config");

console.log("Port:", config.port);
console.log("DB Host:", config.db.host);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
