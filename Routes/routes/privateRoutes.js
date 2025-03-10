const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/dashboard', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.json({ message: "Welcome to Admin Dashboard" });
});

module.exports = router;
