const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp();

const db = admin.firestore();
const app = express();
const main = express();

main.use('/', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

app.post('/addUser', (req, res) => {
    const user = req.body;

    return db.collection('users').doc(user.email).set(user)
        .then(() => res.status(200).send('success'))
        .catch(() => res.status(400).send('error'));
});

exports.api = functions.https.onRequest(main);
