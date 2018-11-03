const { check, validationResult } = require('express-validator/check');
const { db } = require('./init');

const room = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const room = req.body;

	return db
		.collection('rooms')
		.doc(room.hash)
		.set(room)
		.then(resp => res.status(200).send(resp))
		.catch(err => res.status(400).send(err));
};

const roomValidators = [check('hash').exists(), check('owner').exists(), check('owner').isEmail()];

module.exports = { room, roomValidators };
