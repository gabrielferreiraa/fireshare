import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";

export default history => [
    thunk,
    multi,
    promise,
    logger,
    routerMiddleware(history)
];
