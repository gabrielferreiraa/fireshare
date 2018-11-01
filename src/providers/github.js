import { firebase, githubProvider } from 'firebase/config';

const login = () => firebase
  .auth()
  .signInWithPopup(githubProvider)
  .then(result => result)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
  });

const getRelevantData = user => ({
  name: user.displayName,
  avatar: user.photoURL,
  email: user.email,
  token: user.qa,
});

export { login, getRelevantData };
