import { firebase, githubProvider } from 'firebase/config';

const login = () =>
	firebase.auth().signInWithPopup(githubProvider).then((result) => result).catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
		var credential = error.credential;
	});

const getRelevantData = (user) => ({
	name: user.displayName,
	avatar: user.photoURL,
	email: user.email,
	token: user.qa
});

export { login, getRelevantData };
