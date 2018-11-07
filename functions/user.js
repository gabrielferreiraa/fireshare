const { check, validationResult } = require('express-validator/check');
const { db } = require('./init');

const userExists = doc => {
	const user = db.collection('users').doc(doc);

	return user.get().then(docSnapshot => {
		if (docSnapshot.exists) {
			return true;
		}

		return false;
	});
};

const user = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const user = req.body;

	return db
		.collection('users')
		.doc(user.email)
		.set(user)
		.then(resp => res.status(200).send(resp))
		.catch(err => res.status(400).send(err));
};

const userValidators = [check('name').exists(), check('email').isEmail()];

module.exports = { user, userValidators, userExists };
