const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: `Welcome, ${req.user.username}` });
});

module.exports = router;
