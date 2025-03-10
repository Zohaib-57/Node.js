const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "mysecretkey";  // Instead of .env, we use a constant

// Fake Database
const users = [];

const register = async (req, res) => {
    const { username, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    users.push({ username, password: hashedPassword, role });

    res.json({ message: "User registered successfully!" });
};

const login = async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ error: "User not found" });

    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ error: "Invalid password" });

    // Generate token
    const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
};

module.exports = { register, login };
