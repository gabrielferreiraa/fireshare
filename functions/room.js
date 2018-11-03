const { check, validationResult } = require('express-validator/check');
// const { db } = require('./init');

const room = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const room = req.body;

	return res.send('asd');
};

const roomValidators = [check('name').exists(), check('email').isEmail()];

module.exports = { room, roomValidators };
