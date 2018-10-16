import { db } from 'firebase/config';

const register = user => (
    db.collection('users').doc(user.email).set(user)
        .then(res => res)
        .catch(function(error) {
            console.error("Error writing document: ", error);
        })
);

export default register;