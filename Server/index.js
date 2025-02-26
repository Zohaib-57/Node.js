const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
	const log = `${Date.now()} : ${req.url} New Request Received\n`;
	const myUrl = url.parse(req.url, true);
	console.log(myUrl);

	// Handling routes properly
	switch (myUrl.pathname) {
		case "/":
			res.end("Home Page");
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
