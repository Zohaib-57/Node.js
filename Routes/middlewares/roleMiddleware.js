
const roleMiddleware = (role) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role) {
            return res.status(403).json({ error: "Forbidden: You don’t have permission" });
        }
        next();
    };
};

module.exports = roleMiddleware;
