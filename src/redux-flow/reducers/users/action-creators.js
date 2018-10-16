import * as action from './actions';
import register from 'firebase/register';

const request = () => ({
    type: action.REGISTER_REQUEST
});

const success = () => ({
    type: action.REGISTER_SUCCESS
});

const handleRegister = user => {
    return dispatch => {
        dispatch(request());
        const response = register(user);

        response.then(res => dispatch(success()));
    }
}

export { handleRegister };
