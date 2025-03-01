const express = require("express");

const app = express();

app.get("/", (req, res) => {
	const name = req.query.name || "Guest"; // Default to "Guest" if no name is provided
	return res.send(`Hello from the Home page! Hey, ${name}`);
});

app.get("/about", (req, res) => {
	const name = req.query.name || "Guest";
	const age = req.query.age ? `${req.query.age} years old` : "an unknown age";
	return res.send(`Hello from the About page! Hey, ${name}, you are ${age}.`);
});

app.listen(8000, () => {
	console.log("Server started on port 8000");
});
