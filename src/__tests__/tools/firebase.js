import firebase from 'tools/firebase';
import { expect } from 'chai';

describe('Firebase Config', () => {
    test('should be a object', () => {
        expect(firebase).to.be.a('object');
    });

    test('should be include apiKey', () => {
        expect(firebase).have.property('apiKey');
    });

    test('should be have property authDomain', () => {
        expect(firebase).have.property('authDomain')
    });

    test('should be have property databaseURL', () => {
        expect(firebase).have.property('databaseURL');
    });

    test('should be have property projectId', () => {
        expect(firebase).have.property('projectId');
    });
});
