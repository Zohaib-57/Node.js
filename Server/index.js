const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
	const method = req.method;
	const log = `${Date.now()} : ${method} ${req.url} New Request Received\n`;
	const myUrl = url.parse(req.url, true);
	console.log(myUrl);

	// Handling routes properly
	switch (myUrl.pathname) {
		case "/":
			if (method == "GET") res.end("Home Page");
			break;
		case "/about":
			const username = myUrl.query.myname || "Guest";
			res.end(`Hi, I am ${username}`);
			break;
		case "/contact":
			res.end("Contact Page");
			break;
		case "/search":
			const search = myUrl.query.search_query || "No search query provided";
			res.end("Here are your results for: " + search);
			break;
		case "/signup":
			if (method == "GET") res.end("Signup Page");
			else if (method == "POST")
				// DB Query to save user data
				res.end("Signup Successful");
			break;
		default:
			res.statusCode = 404;
			res.end("404 Page Not Found");
			break;
	}

	// Append logs after response to avoid delaying requests
	fs.appendFile("log.txt", log, (err) => {
		if (err) console.error("Error writing to log file", err);
	});
});

myServer.listen(8000, () => {
	console.log("Server is running on port 8000");
});

// const http = require("http");

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, { "Content-Type": "text/html" });
// 	res.end("Hello World");
// });

// server.listen(5000, () => {
// 	console.log("Server is running on port 5000");
// });
