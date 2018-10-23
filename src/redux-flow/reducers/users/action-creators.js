import * as action from './actions';
import register from 'firebase/register';

const request = () => ({
    type: action.REGISTER_REQUEST
});

const success = data => ({
    type: action.REGISTER_SUCCESS,
    data
});

const handleRegister = user => dispatch => {
    dispatch(request());
    const response = register(user);

    response.then(res => (
        dispatch(success(user))
    ));
}

export { handleRegister };
