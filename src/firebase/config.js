import firebase from 'firebase';
import firebaseConfig from 'tools/firebase';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, githubProvider, googleProvider };
