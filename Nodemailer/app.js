const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
	service: "gmail", // Example using Gmail
	auth: {
		user: "mzohaibaa2000@gmail.com",
		pass: "whim omvw ceon mouu",
	},
});

// Define the email options
const mailOptions = {
	from: "mzohaibaa2000@gmail.com",
	to: "mwaseemabbas2023@gmail.com",
	subject: "Hello from Node.js",
	text: "Hello! I hope this message finds you well. I’m reaching out to send my warmest greetings and to wish you a wonderful day ahead. May your day be filled with positivity, success, and good health. If there’s anything I can assist you with, feel free to let me know. I’m here to help! Take care and stay safe. Best regards,Zohaib.",
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log("Error:", error);
	} else {
		console.log("Email sent:", info.response);
	}
});
