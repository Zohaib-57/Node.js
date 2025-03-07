const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// Application-level middleware
app.use((req, res, next) => {
	console.log("Application-level middleware.");
	console.log(
		`Request method: ${req.method}, URL: ${req.url}, Time: ${Date.now()}`
	);
	next(); // Proceed to the next middleware
});

// Route handler for the root URL

// Router Level Middleware
const router = express.Router();

// Middleware function for router
router.use((req, res, next) => {
	console.log("Request URL:", req.originalUrl);
	next(); // Proceed to the next middleware
});

// Route handler
router.get("/", (req, res) => {
	res.send("Router Middleware");
});

app.use("/router", router); // Apply router middleware

app.get("/error", (req, res) => {
	throw new Error("Something went wrong!"); // Simulating an error
});

// Error-handling middleware
app.use((err, req, res, next) => {
	console.error(err.message);
	res.send("Internal Server Error");
});

// Built-in Middleware
app.use(express.json()); // Parse JSON bodies
app.post("/user", (req, res) => {
	console.log(req.body); // Parsed JSON data
	res.send("User data received");
});

app.use(morgan("dev")); // Logs HTTP requests
app.use(cors()); // Enables Cross-Origin Resource Sharing

app.get("/morgan", (req, res) => {
	res.send("Hello, Morgan  Middleware!");
});

app.get("/application", (req, res) => {
	res.send("Application Middleware!");
});

app.listen(3000, () => {
	console.log("The server is running on port 3000.");
});
