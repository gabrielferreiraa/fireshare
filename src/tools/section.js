function generate(limit) {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < limit; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

const generateHash = (limit = 5) => generate(limit);

export { generateHash };
