const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors')({ origin: true });
const bodyParser = require('body-parser');

admin.initializeApp();

const db = admin.firestore();
const app = express();
const main = express();

main.use(cors);
main.use('/', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

function requireAuth (req, res, next) {
    const authorization = req.header('Authorization');
    
    if (authorization) {
        return admin.auth().verifyIdToken(authorization)
            .then(() => next())
            .catch(() => res.sendStatus(401));
    }
    
    return res.sendStatus(401);
};

app.post('/user', requireAuth, (req, res) => {
    const user = req.body;

    return db.collection('users').doc(user.email).set(user)
        .then((resp) => res.status(200).send(resp))
        .catch((err) => res.status(400).send(err));
});

exports.api = functions.https.onRequest(main);
