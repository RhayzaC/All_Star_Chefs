const jwt = require("jsonwebtoken");

module.exports = {
    authenticate: (req, res, next) => {
        if (!req.cookies || !req.cookies.token) {
            return res.status(401).json({ error: "Not authorized" });
        }

        jwt.verify(
            req.cookies.token,
            process.env.SECRET,
            (err, userInfo) => {
                if (err) {
                    return res.status(401).json({ error: "Not authorized", message: err.message });
                } else {
                    next();
                }
            }
        );
    }
};

