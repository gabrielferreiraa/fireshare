import { expect } from "chai";
import middlewares from "redux-flow/stores/middlewares";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import logger from "redux-logger";

describe("middleares redux flow stores", () => {
    test("should has value", () => {
        expect(middlewares).to.not.be.empty;
    });

    test("should be an array", () => {
        expect(middlewares).to.be.an("array");
    });

    test("should be have 4 middlewares", () => {
        expect(middlewares).to.have.lengthOf(4);
    });

    test("should be have `promise` middleware", () => {
        expect(middlewares).to.deep.include(promise);
    });

    test("should be have `multi` middleware", () => {
        expect(middlewares).to.deep.include(multi);
    });

    test("should be have `thunk` middleware", () => {
        expect(middlewares).to.deep.include(thunk);
    });

    test("should be have `logger` middleware", () => {
        expect(middlewares).to.deep.include(logger);
    });
});
