import { firebase, googleProvider } from "firebase/config";

const login = () =>
    firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(result => result)
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
        });

const getRelevantData = user => ({
    name: user.displayName,
    avatar: user.photoURL,
    email: user.email
});

export { login, getRelevantData };
