import axios from "axios";

export default ({ method, url, ...options }) =>
    axios({
        headers: {
            Accept: "application/json",
            Authorization: options.token
        },
        method,
        url,
        ...options
    });
