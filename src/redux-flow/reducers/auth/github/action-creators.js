import * as action from './actions';
import { handleRegister } from 'redux-flow/reducers/users/action-creators';
import { login, getRelevantData } from 'providers/github';

const request = () => ({
	type: action.LOGIN_REQUEST
});

const success = (user) => ({
	type: action.LOGIN_SUCCESS,
	user
});

const handleLogin = (history) => (dispatch) => {
	dispatch(request());
	const response = login();

	response
		.then((res) => {
			const user = getRelevantData(res.user);
			console.log(res.user, user);
			dispatch(success(user));
			dispatch(handleRegister(user));
			history.push('/entry');
		})
		.catch((err) =>
			dispatch({
				type: action.LOGIN_ERROR
			})
		);
};

export { handleLogin };
