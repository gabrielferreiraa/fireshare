import * as action from "./actions";
import { handleRegister } from "redux-flow/reducers/users/action-creators";
import { login, getRelevantData } from "providers/github";
import { push } from "connected-react-router";

const request = () => ({
    type: action.LOGIN_REQUEST
});

const success = user => ({
    type: action.LOGIN_SUCCESS,
    user
});

const handleLogin = () => dispatch => {
    dispatch(request());
    const response = login();

    response
        .then(res => {
            const user = getRelevantData(res.user);

            dispatch(success(user));
            dispatch(handleRegister(user)).then(() => dispatch(push("/entry")));
        })
        .catch(() =>
            dispatch({
                type: action.LOGIN_ERROR
            })
        );
};

export { handleLogin };
