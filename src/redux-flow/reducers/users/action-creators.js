import api from "tools/api";
import http from "tools/http-wrapper";
import * as action from "./actions";

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

    return http({
        method: "POST",
        url: `${api.url}/user`,
        data: user,
        token: user.token
    })
        .then(() => dispatch(success(user)))
        .catch(() => dispatch(error()));
};

export { handleRegister };
