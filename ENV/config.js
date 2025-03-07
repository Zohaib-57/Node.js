// config.js
require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    environment: process.env.ENVIRONMENT || 'development',
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || ''
    }
};