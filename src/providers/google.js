import { firebase, googleProvider } from 'firebase/config';

const login = () => (
    firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(result => result)
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        })
)

const getRelevantData = user => ({
    name: user.displayName,
    avatar: user.photoURL,
    email: user.email
});

export { login, getRelevantData }
