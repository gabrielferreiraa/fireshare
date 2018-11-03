const { https } = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ origin: true });
const bodyParser = require('body-parser');
const { user, userValidators } = require('./user');
const { room, roomValidators } = require('./room');
const { requireAuth } = require('./auth');
const admin = require('firebase-admin');

admin.initializeApp();

const app = express();
const main = express();

main.use(cors);
main.use('/', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', requireAuth, userValidators, (req, res) => user(req, res));
app.post('/room', requireAuth, roomValidators, (req, res) => room(req, res));

exports.api = https.onRequest(main);
