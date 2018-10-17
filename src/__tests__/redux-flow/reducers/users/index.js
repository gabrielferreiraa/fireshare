import { expect } from 'chai';
import reducer from 'redux-flow/reducers/users';
import * as actions from 'redux-flow/reducers/users/actions';

describe('Users Reducer', () => {
    const initialState = {
        isFetching: false
    }

    test('should be a function', () => {
        expect(reducer).to.be.a('function');
    });

    test('should be return default state', () => {
        const request = reducer(undefined, { type: 'unknown' });

        expect(request).to.be.deep.equal(initialState);
    });

    test('can handle REGISTER_REQUEST', () => {
        const request = reducer(undefined, {
            type: actions.REGISTER_REQUEST
        });

        expect(request).to.be.deep.equal({
            ...initialState,
            isFetching: true
        });
    });

    test('can handle REGISTER_SUCCESS', () => {
        const request = reducer(undefined, {
            type: actions.REGISTER_SUCCESS
        });

        expect(request).to.be.deep.equal({
            ...initialState,
            isFetching: false
        });
    });

    test('can handle REGISTER_ERROR', () => {
        const request = reducer(undefined, {
            type: actions.REGISTER_ERROR
        });

        expect(request).to.be.deep.equal({
            ...initialState,
            isFetching: false
        })
    });
})
