import firebase from "firebase";
import firebaseConfig from "tools/firebase";

firebase.initializeApp(firebaseConfig);

const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, githubProvider, googleProvider };
