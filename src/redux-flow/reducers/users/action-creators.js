import * as action from './actions';
import axios from 'axios';
import api from 'tools/api';
import register from 'firebase/register';

const request = () => ({
    type: action.REGISTER_REQUEST
});

const success = data => ({
    type: action.REGISTER_SUCCESS,
    data
});

const error = () => ({
    type: action.REGISTER_ERROR
});

const handleRegister = user => dispatch => {
    dispatch(request());

    axios({
        method: 'POST',
        url: `${api.url}/user`,
        data: user,
        headers: {
            Authorization: user.token
        }
    })
    .then(() => dispatch(success(user)))
    .catch(() => dispatch(error()));
}

export { handleRegister };
