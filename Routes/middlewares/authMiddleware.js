const jwt = require("jsonwebtoken");

const SECRET_KEY = "o9fsvncz9u37tvn2093ibvkjbfkv985893tygbvnncv8798nybo";

const authMiddleware = (req, res, next) => {
	const token = req.header("Authorization");

	if (!token)
		return res.status(401).json({ error: "Access Denied. No token provided" });

	try {
		const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(400).json({ error: "Invalid Token" });
	}
};

module.exports = authMiddleware;
