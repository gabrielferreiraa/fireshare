const admin = require("firebase-admin");

module.exports = {
    requireAuth: (req, res, next) => {
        const authorization = req.header("Authorization");

        if (authorization) {
            return admin
                .auth()
                .verifyIdToken(authorization)
                .then(() => next())
                .catch(() => res.sendStatus(401));
        }

        return res.sendStatus(401);
    }
};
