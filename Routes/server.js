const express = require("express");
const cors = require("cors");

const publicRoutes = require("./routes/publicRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const privateRoutes = require("./routes/privateRoutes");

const app = express();
const PORT = 5000; 

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/", publicRoutes); // Public routes
app.use("/user", protectedRoutes); // Protected routes
app.use("/admin", privateRoutes); // Private admin routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
