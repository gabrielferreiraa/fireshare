import { expect } from "chai";
import reducer from "redux-flow/reducers/auth/google";
import * as actions from "redux-flow/reducers/auth/google/actions";

describe("Github Auth Reducer", () => {
    const initialState = {
        isFetching: false,
        isAuthenticated: false,
        token: "",
        user: {}
    };

    test("should be a function", () => {
        expect(reducer).to.be.a("function");
    });

    test("should be return default state", () => {
        const request = reducer(undefined, { type: "unknown" });

        expect(request).to.be.deep.equal(initialState);
    });

    test("can handle LOGIN_REQUEST", () => {
        const request = reducer(undefined, {
            type: actions.LOGIN_REQUEST
        });

        expect(request).to.be.deep.equal({
            ...initialState,
            isFetching: true
        });
    });

    test("can handle LOGIN_SUCCESS", () => {
        const user = {
            name: "Gabriel Ferreira",
            email: "hi.gabrielferreira@gmail.com",
            avatar: "photo-url.jpg"
        };

        const request = reducer(undefined, {
            type: actions.LOGIN_SUCCESS,
            user
        });

        expect(request).to.be.deep.equal({
            ...initialState,
            isFetching: false,
            isAuthenticated: true,
            user
        });
    });

    test("can handle LOGIN_ERROR", () => {
        const request = reducer(undefined, {
            type: actions.LOGIN_ERROR
        });

        expect(request).to.be.deep.equal({
            ...initialState,
            isFetching: false,
            isAuthenticated: false
        });
    });
});
