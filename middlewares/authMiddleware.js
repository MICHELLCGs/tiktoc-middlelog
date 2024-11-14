require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const apiKey = req.query['api-key'];
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Invalid API key' });
    }
};

module.exports = authMiddleware;
