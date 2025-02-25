
//Creating a Server
const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
	const log = `${Date.now(0)} : ${req.url} New Request Received\n`;
    //taking care of the non-blocking request
	fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("About Page");
                break;
            case "/contact":
                res.end("Contact Page");
                break;
            default:
                res.end("404 Page Not Found");
                break;
        }
	});
	// console.log(req);
});
//whenever you make the changes in your server you have to restart your server
myServer.listen(8000, () => {
	console.log("Server is running on port 8000");
});
