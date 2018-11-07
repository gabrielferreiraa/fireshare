const { check, body, validationResult } = require('express-validator/check');
const { userExists } = require('./user');
const { db } = require('./init');

const room = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const room = {
		...req.body,
		owner: db.collection('users').doc(req.body.owner),
		write: false,
		config: {
			mode: 'javascript'
		},
		content: '//welcome to fireshare',
		guests: []
	};

	return db
		.collection('rooms')
		.doc(room.hash)
		.set(room)
		.then(resp => res.status(200).send(resp))
		.catch(err => res.status(400).send(err));
};

const roomValidators = [
	check('hash').exists(),
	check('owner').exists(),
	check('owner').isEmail(),
	body('owner').custom(async value => {
		const docExists = await userExists(value);

		if (!docExists) {
			return Promise.reject('doc not exists in firebase');
		}
	})
];

module.exports = { room, roomValidators };
