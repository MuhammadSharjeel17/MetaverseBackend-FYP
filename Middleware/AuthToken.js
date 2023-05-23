const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // Authentication for token
        if (!token) {
            return res.status(401).json({
                success: false,
                "message": "Token not found"
            })
        }
        
        const decoded = jwt.verify(token,process.env.JWT_S );
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            "message": err.message
        })
    }
};